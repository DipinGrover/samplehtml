let is_user_subscribed = true;
let have_lions_gateplay = false;
let have_sony_entertainment = false;

if(is_user_subscribed){
    is_user_subscribed = true;
    if(have_lions_gateplay)
    {
        console.log("Watch John Wick.");
    }
    else if(have_sony_entertainment)
        {
            console.log("Show the guardian.");
        }
    else
        {
            console.log("Show The Boys");
        }
}
else{
    console.log("Show the subscription plans.")
}

console.log("End...");