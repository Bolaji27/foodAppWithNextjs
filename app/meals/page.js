
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { GetMeals } from "@/lib/meals";
import { Suspense } from "react";


async function Meals() {
    const meals = await GetMeals();
    return <MealsGrid meals ={meals}/>
}
 function MealsPage() {
   
  return (<>
   <header className={classes.header}>
    <h1>Delicious meals, created <span className={classes.highlight}> by you</span></h1>
    <p>Choose your favourite recipe and cook it yourself. It is very fun! </p>
    <p className={classes.cta}>
        <Link  href="/meals/share">Share your favourite recipe</Link>
    </p>
   </header>
   <main className={classes.main}>
    <Suspense fallback={<p className={classes.loading}>Fetching Meals....</p>}>
        <Meals/>
    </Suspense>
   </main>
  </>
  
  )
}

export default MealsPage;