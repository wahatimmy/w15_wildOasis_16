import supabase from "./supabase";

export const login = async({email, password}) => {
  console.log("login email, password", email, password);
  let { data, error } = await supabase.auth.signInWithPassword({
    email, password
  });
  if(error) throw new Error(error.message);
  console.log('login() data', data);
  return data;
}