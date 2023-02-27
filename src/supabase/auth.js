import { supabase } from "../config/supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error.message) {
    return { error: error.message };
  } else {
    return { user: data.user };
  }
}

export async function logIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error?.message) {
    return { error: error.message };
  } else {
    return { user: data.user };
  }
}

export async function logOut() {
  const { data, error } = await supabase.auth.signOut();

  if (error?.message) {
    return { error: error.message };
  } else {
    return { user: data.user };
  }
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error?.message) {
    return { error: error.message };
  } else {
    return { user: data.user };
  }
}
