import { DB_KEY, DB_URL } from "./config.js";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createClient } from "@supabase/supabase-js";

const database = createClient(DB_URL, DB_KEY);
// console.log(database);
export default database;
