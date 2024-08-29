---
title: First Class Function Passing Functions as Arguments
image: ../../../public/assets/00.jpg
publishedAt: 2020-03-12
description: ကျွန်တော်တို့ သည် Function တွေကို variable တွေ ၊ argument တွေမှာ သိမ်းဆည်းနိုင်ပြီး နောက်ထပ် function တွေမှာ ပြန်ပြီး သုံးနိုင်ပါသည်။ First Class Function ဆိုသည်မှာ Function တစ်ခုကနေ နောက် function တစ်ခုကို return ပြန်နိုင်ခြင်းကို ဆိုလိုပါသည်။ First Class Function ကို ရှင်းလင်းနိုင်ရန် အောက်ပါ program ဖြင့် ဆက်လက်ရှင်းလင်းပါမည်။
slug: first-class-function-passing-functions-as-arguments
isPublish: true
---
ကျွန်တော်တို့ သည် Function တွေကို variable တွေ ၊ argument တွေမှာ သိမ်းဆည်းနိုင်ပြီး နောက်ထပ် function တွေမှာ ပြန်ပြီး သုံးနိုင်ပါသည်။ First Class Function ဆိုသည်မှာ Function တစ်ခုကနေ နောက် function တစ်ခုကို return ပြန်နိုင်ခြင်းကို ဆိုလိုပါသည်။ First Class Function ကို ရှင်းလင်းနိုင်ရန် အောက်ပါ program ဖြင့် ဆက်လက်ရှင်းလင်းပါမည်။

Program Simple ::  
  
```
let dateOfBirth = [1990 ,1995 , 2000 , 2005 ,2001];  
function calAge(dob){  
return 2020 - dob;  
}

  
function arrCal(arr,fn){  
let resArr = [];  
for (let i = 0 ; i<arr.length;i++){  
resArr.push(fn(arr[i]));  
}  
return resArr;  
}  
let age = arrCal(dateOfBirth,calAge);  
console.log(age);
```

ရှင်းလင်းချက်

ကျွန်တော်တို့ သည် အသက်တွေကို တွက်ချက်မည် ဖြစ်သည့် အတွက် တွက်ချက်မည့် အသက်တွေကို array တစ်ခုတည်ဆောက်ပြီး ၎င်းကို အခြေ အနေြဖင့် သုံးပါမည်။ ထို့ကြောင့် dateOfBirth ဟူ၍ array တစ်ခု တည်ဆောက်ပြီး 1990 ,1995 , 2000 , 2005 ,2001 ဟူသော ဒေတာများ ကို ဆက်ပြီး ထည့်ပါမည်။ အဆိုပါ အသက်တွေကို တစ်ခုချင်းတွက်မည့် ဆိုရင် အဆင်မပြေနိုင်သည့် အတွက် ကျွန်တော်တို့သည် calAge function တစ်ခုဆောက်ပြီး array ထဲမှာရှိတဲ့ value လက်ရှိ ခုနှစ် နဲ့  တစ်ပြိုင်တည်း တွက်ပြီး ရလဒ် ထုတ်ပေးမှာပါ။ 

ထို့ကြောင့် ကျွန်တော်တို့ arrCa ဟူသော function ကို ဆက်လက် တည်ဆောက်ပါသည်။ ယခု function တွေ argument နှစ်ခု ပါရှိပြီး ပထမ  argument (arr) မှာ array တွေကို လက်ခံရန် အတွက် ဖြစ်ပြီး ဒုတိယ argument(fn)  က  နောက်ထပ် function အတွက် လှမ်းပြီးသုံးနိုင်ရန် အတွက် ဖြစ်ပါသည်။ ဆက်လက်ပြီး function ထဲမှာ loop တစ်ခု တည်ဆောက်ပါမည်။ ၎င်းသည် array တွေကို loop ပတ်ကာ result တွေကို ပြန်ထုတ်ပေးဖို့ပါ။ 

ကျွန်တော်တို့ loop ပတ်ပြီး return ပြန်လာမည့် array တွေကို သိမ်းဆည်းနိုင်ရန် အတွက် resArr array အလွတ်ကို တည်ဆောက်ပါမည်။ အဆိုပါ array ထဲ value တွေ ထည့်ရန် အတွက် push နည်းလမ်းကို သုံးကာ ထည့်မည် ဖြစ်ပြီး push နည်းလမ်းအတိုင်း ဆိုလျှင် array ၏ နောက်ဆုံး eleement  ကနေစပြီး ထည့်သွားမည် ဖြစ်သည်။ ၎င်းအား for loop ပတ်ကာ value အကုန် ထည့်သွားရန် for loop ပတ်ပါမည်။

ကျွန်တော်တို့ ရေးထားသော program အား reuslt ထုတ်ရန် let age = arrCal(dateOfBirth,calAge); ဟူ၍ ရေးပါမည်။  အဆိုပါ age  console.log ထုတ်ချင်းဖြင့် ရလဒ်ထုတ်နိုင်ပါသည်။

---