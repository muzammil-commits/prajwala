import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AdminUser {
  id: string;
  email: string;
  fullName: string;
  role: 'super_admin' | 'admin';
}

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  user: null,
  loading: true,
  login: async () => ({ success: false }),
  logout: async () => {},
  isAuthenticated: false,
});

const ADMIN_STORAGE_KEY = 'pcds_admin_session';

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(() => {
    try {
      const saved = localStorage.getItem(ADMIN_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active Supabase session
    async function initSession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session && session.user) {
          const authUser: AdminUser = {
            id: session.user.id,
            email: session.user.email || 'admin@prajwala.org',
            fullName: session.user.user_metadata?.full_name || 'Prajwala Administrator',
            role: 'super_admin',
          };
          setUser(authUser);
          localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(authUser));
        }
      } catch (err) {
        console.warn('Session check warning:', err);
      } finally {
        setLoading(false);
      }
    }
    initSession();
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    try {
      // 1. Attempt Supabase Auth login
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: pass,
      });

      if (!error && data.session && data.user) {
        const authUser: AdminUser = {
          id: data.user.id,
          email: data.user.email || email,
          fullName: data.user.user_metadata?.full_name || 'Prajwala Administrator',
          role: 'super_admin',
        };
        setUser(authUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(authUser));
        setLoading(false);
        return { success: true };
      }

      // 2. Check for configured authorized master admin access (for initial provisioning)
      // Allows immediate access to set up and manage the database if user hasn't registered through auth yet
      const cleanEmail = email.trim().toLowerCase();
      if (
        (cleanEmail === 'admin@prajwala.org' ||
          cleanEmail === 'prajwala.guntur@gmail.com' ||
          cleanEmail === 'muzam@admedtech.com' ||
          cleanEmail === 'admin') &&
        (pass === 'admin123' || pass === 'prajwala2019' || pass === 'Prajwala@2026')
      ) {
        const authUser: AdminUser = {
          id: 'admin-master',
          email: cleanEmail,
          fullName: 'Prajwala Master Administrator',
          role: 'super_admin',
        };
        setUser(authUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(authUser));
        setLoading(false);
        return { success: true };
      }

      setLoading(false);
      return {
        success: false,
        error: error?.message || 'Invalid administrator email or password. Please try again.',
      };
    } catch (err: any) {
      setLoading(false);
      return { success: false, error: err.message || 'Login failed. Please check your network.' };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    setUser(null);
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
