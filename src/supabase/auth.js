import { supabase } from "../config/supabase";

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (data) {
    console.log(data);
    return data;
  } else {
    console.log(error);
  }
}

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    return user;
  } else {
    console.log("##### ", error);
  }
}
