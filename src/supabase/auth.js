import { supabase } from "../config/supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

export async function logIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

export async function logOut() {
  const { data, error } = await supabase.auth.signOut();
  if (data) {
    return data;
  } else {
    return error;
  }
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (data) {
    return data;
  } else {
    return error;
  }
}
