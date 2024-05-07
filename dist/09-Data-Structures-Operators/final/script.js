"use strict";const weekdays=["mon","tue","wed","thu","fri","sat","sun"],openingHours={[weekdays[3]]:{open:12,close:22},[weekdays[4]]:{open:11,close:23},[weekdays[5]]:{open:0,close:24}},restaurant={name:"Classico Italiano",location:"Via Angelo Tavanti 23, Firenze, Italy",categories:["Italian","Pizzeria","Vegetarian","Organic"],starterMenu:["Focaccia","Bruschetta","Garlic Bread","Caprese Salad"],mainMenu:["Pizza","Pasta","Risotto"],openingHours:openingHours,order(e,a){return[this.starterMenu[e],this.mainMenu[a]]},orderDelivery({starterIndex:e=1,mainIndex:a=0,time:t="20:00",address:o}){console.log(`Order received! ${this.starterMenu[e]} and ${this.mainMenu[a]} will be delivered to ${o} at `+t)},orderPasta(e,a,t){console.log(`Here is your declicious pasta with ${e}, ${a} and `+t)},orderPizza(e,...a){console.log(e),console.log(a)}},flights="_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30",getCode=e=>e.slice(0,3).toUpperCase();for(const m of flights.split("+")){const[n,o,p,q]=m.split(";"),r=((n.startsWith("_Delayed")?"🔴":"")+n.replaceAll("_"," ")+` ${getCode(o)} ${getCode(p)} (${q.replace(":","h")})`).padStart(36);console.log(r)}const gameEvents=new Map([[17,"⚽️ GOAL"],[36,"🔁 Substitution"],[47,"⚽️ GOAL"],[61,"🔁 Substitution"],[64,"🔶 Yellow card"],[69,"🔴 Red card"],[70,"🔁 Substitution"],[72,"🔁 Substitution"],[76,"⚽️ GOAL"],[80,"⚽️ GOAL"],[92,"🔶 Yellow card"]]),game={team1:"Bayern Munich",team2:"Borrussia Dortmund",players:[["Neuer","Pavard","Martinez","Alaba","Davies","Kimmich","Goretzka","Coman","Muller","Gnarby","Lewandowski"],["Burki","Schulz","Hummels","Akanji","Hakimi","Weigl","Witsel","Hazard","Brandt","Sancho","Gotze"]],score:"4:0",scored:["Lewandowski","Gnarby","Lewandowski","Hummels"],date:"Nov 9th, 2037",odds:{team1:1.33,x:3.25,team2:6.5}};