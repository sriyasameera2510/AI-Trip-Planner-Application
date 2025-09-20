import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewUser = mutation({
  args: { 
    name: v.string(),
    imageUrl: v.string(),
    email: v.string() 
    },
  handler: async (ctx, args) => {
    //if user already exists
    const user = await ctx.db.query("UserTable").filter((q)=>q.eq(q.field('email'),args.email)).collect();

    if(user?.length==0){
        const userData={
            name:args.name,
            imageUrl:args.imageUrl,
            email:args.email
        }
        //if not create a new user
        const result = await ctx.db.insert('UserTable',userData)
        return userData;
    }
    return user[0];
  },
});