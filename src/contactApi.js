import supabase from "./supabase";

export async function ContectMe(newContact){
    
const { data, error } = await supabase.from('ContactedPeople').insert([newContact]).select()

if (error) {
    console.error(error);
    throw new Error("Contact could not be Done");
  }

  return data;

}