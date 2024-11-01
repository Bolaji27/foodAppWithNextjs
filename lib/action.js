"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

 const isInvalidText = (text)=>{
    if(!text) {
        return <p>Please insert field</p>
    }
 }
export async function shareMeal(formData) {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
  if(isInvalidText(meal.title) || isInvalidText(meal.summary) || 
  isInvalidText(meal.instructions)
 || isInvalidText(meal.creator) || isInvalidText(meal.creator_email)
|| !meal.image.include('@') || !meal.image) {
    return {message: "please input all fields"}
}
    await saveMeal(meal);
   redirect("/meals");
  }