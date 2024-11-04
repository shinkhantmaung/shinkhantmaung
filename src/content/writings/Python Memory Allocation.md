---
title: Python Memory Allocation
image: 
publishedAt: 2020-05-19
description: Lorem ipsum dolor sit amet consectetur et ultrices blandit neque ege
slug: python-memory-allocation
isPublish: true
---
**Memory Allocation** ဆိုသည်မှာ ယေဘုယျ အားဖြင့် ပရိုဂရမ်တစ်ခုမှတစ်ဆင့် ထွက်ပေါ်လာသော ဒေတာများအား ကွန်ပြုတာမှတ်ဉာဏ်တွင်ရှိသော နေရာအလွတ်များ တွင် နေရာထားချပေးခြင်း (သို့မဟုတ်) နေရာ ခွဲတမ်းချပေးခြင်း ဖြစ်သည်။ Python တွင် memory allocation ( Memory Management) လုပ်ငန်းစဉ်ကို နောက်ကွယ် ရှိ Memory Manager မှ လုပ်ကိုင်သည်။ ဤတွင် Memory Manager ဟူသည် အဘယ်နည်း။ Memory Manager ဟူသည်မှာ ပရိုဂရမ် တစ်ခုမှ ဒေတာ အချက်အလက်များ ဖြစ်သော function ၊ method နှင့် Object စသည်တို့အား စီမံခန့်ခွဲပေးရာအပိုင်းဖြစ်သည်။(MemoryManager)သည်Pythonနှင့်သက်ဆိုင်သောဒေတာအားလုံးကိုလည်ပတ်မှုစနစ်နှင့်အပြန်အလှန်ဆက်သွယ်ခြင်းအားဖြင့် heap memory တွင်လုံလောက်သောအခန်းရှိရန်လုပ်ဆောင်သည်။ Memory Manager တွင် အပိုင်း နှစ်ပိုင်း ဖြင့် ခွဲခြားထားသည်။ ပထမအပိုင်းမှာ Stack Memory အပိုင်း ဖြစ်ကာ ကျန်ဒုတိယအပိုင်း မှာ Heap Memory အပိုင်း တို့ ဖြစ်သည်။

အပိုင်း နှစ်ပိုင်း ရှိသည်။ ၎င်းတို့မှာ 

၁။ Stack Memory 
၂။ Heap Memory  အပိုင်းတို့ ဖြစ်သည်။

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdy6FmfjR8uGfEB4N85L9I2bZggK2qaUEZS6yZvIUQN4mtxF3BPdT5CrEpTsvpOVuiQmbPQ6bLa2rLd73LXhF61eJTXKtyIHOpDAJPrNRgdKw1Q4aWszqfv4knsxqEKejJ5-dPAv4xtkyZwSTZPhRF-iGg?key=lCn36MaGLteIQOzYmu5zSw)

ယင်းတို့ အနက် ပထမအပိုင်း ဖြစ်သော stack memory အပိုင်း သည် function နှင့် menthod တို့ကို သိမ်းသည်။ ပြီးနောက် ဒုတိယအပိုင်းဖြစ်သော heap memory အပိုင်း သည် object များအား သိမ်းသည်။ 
### Stack Memory

Stack Memory ဆိုသည်မှာ blocks of memory အတွင်း memory ခွဲဝေချထား ဖြစ်စဉ်ကို ဆိုလိုသည်။ ယင်းအား stack memory ဟုခေါ်သည်။ ခွဲဝေရမည့် memory ၏ ပမာဏ အရွယ်အစားကို compiler မှသိသည်။ function တစ်ခုခေါ်သည့်အခါတိုင်း၎င်း၏ variable များသည်  stack တွင်ခွဲဝေပေးသည်။ function call ကိုကျော်သွားတိုင်း variable အတွက် memory ကိုဖယ်ထုတ်လိုက်သည်။ဤအချက်များအားလုံးသည်compilerတွင်ကြိုတင်သတ်မှတ်ထားသောလုပ်ရိုးလုပ်စဉ်များကိုသုံးခြင်းသာဖြစ်သည်။ 
### Heap Memory

Heap Memory  အပိုင်းသည် ၁၀ ၊ ၂၀ ၃၀ ကဲ့သို့သော object များအား သိမ်းဆည်းပေးရာ အပိုင်းဖြစ်သည်။ 


```
a=10  
```

ဤတွင် a = 10 ဟုရေးထားသည်။ သို့သော် a သည် 10 ကို ထောက်သားခြင်း မဟုတ်ဘဲ ၎င်း၏ memory address ကိုသာ ထောက်ထားခြင်း ဖြစ်သည်။ memory addressဆိုသည်မှာ value အစစ်တွေကို သိမ်းဆည်း သိုလှောင်ထားရာ နေရာဖြစ်သည်။ Variable သည် memory reference ဖြစ်ပြီး memory reference ကို ဆိုလိုသည်။ python ၏ id() ဖြင့် identity ကို အောက်ပါအတိုင်း ကြည့်ရှုနိုင်သည်။

Example

```
a=10  
print(id(a))#10105376  
print(hex(id(a)))#0x9a3220
```
အောက်ပါ ဉပမာတွင် ကျွန်တော်သည် a value အား 10 ဟုလည်းကောင်း ၊ b vaule အား 10 ဟုလည်းကောင်း ကြေငြာထားသည်။ a နှင့် b တို့၏ variable name တွေ မတူသော်များလည်း ၎င်းတို့၏ vaule တူနေသောကြောင့် ၎င်းတို့ကို memory တွေ addressတစ်ခုတည်း ၌သာ သိမ်းဆည်းသိုလှောင်ထားသည်။အဆိုပါ  address တစ်ခုတည်းကို ပင် a နှင် b  variable များက လာထောက်ထားခြင်း ဖြစ်သည်။

Example
```
a=10  
b=10  
print(id(a))#10105376  
print(id(b))#10105376
```
  
Simple Program

```
a=10  
b=10  
print(id(a),id(b))
```
  
ကျွန်တော်တို့သည် အထက်ပါပြထားသော ကုတ်သုံးကြောင်းကို run ကြည့်သောအခါ a နှင့် b ၏ memory address မှာ အတူတူပဲ ထွက်လာမှာ ဖြစ်ပါသည်။ ဤသို့ အတူတူထွက်လာရသောအကြောင်းကို အထက်တွင် ရှင်းလင်းခဲ့ပြီးရာ ဆက်လက်ပြီး ပုံမှန်variable နှင့် list ကွဲပြားသောအကြောင်း ရှင်းလင်းသွားမှာ ဖြစ်သည်။ အထက်တွင် ရှင်းလင်းခဲ့သော code သည် variable နှင့် ရေးထားသည် ဖြစ်၍ list နှင့် ကွဲပြားပုံကို list နှင့်ရေးပြီး စမ်းသွားပါမည်။

```
a=[1,2,3,4,5]

b=[1,2,3,4,5]  
print(id(a).id(b))
```

အဆိုပါ list ဖြင့်ရေးထားသော a နှင့် b ၏ memory address ကို id နှင့်သုံးပြီး ထုတ်ကြည့်သောအခါ ရလဒ် မှာ ယခင်ကဲ့သို့ မဟုတ်ဘဲ ကွဲပြားသွားပြီး variable တူညီသော်များလည်း memory address များ မတူညီကို တွေ့ရမည် ဖြစ်သည်။ အဘယ်ကြောင့် ဆိုသော် list တွင်  variable တူသောများလည်း memory address မတူညီသောကြောင့်  ဖြစ်သည်။ တစ်နည်းအားဖြင့် ဆိုရသော် memory address တူသည် ဖြစ်စေ ၊ မတူညီသည် ဖြစ်စေ တစ်နေရာချင်းစီတွင် သွားရောက်သိုလှောင်သိမ်းဆည်းထားခြင်း ကြောင့် ဖြစ်သည်၊ ဤသည်ကို idenstiy operator သုံး၍ စမ်းကြည့်နိုင်သည်။ a နှင့်် b ၏ memory address သည် တူညီခဲ့မည် ဆိုလျှင် ရလဒ် သည် Ture ဟူ၍ ထွက်လာမည်ဖြစ်သည်။ 

```
  a=[1,2,3,4,5]  
b=[1,2,3,4,5]  
#print(id(a).id(b))  
  
vaule=a is b  
print(vaule)
```

အဆိုပါ ကုတ်ကို run လိုက်သောအခါတွင် ရလဒ်သည် false ဟူ၍ ထွက်လာမည် ဖြစ်သည်။ အဘယ်ကြောင့် ဆိုရလျှင် a နှင့် b ၏ memory address များ မတူညီသေေကြာင့်သာဖြစ်သည်။ အကယ်၍  a နှင့် b  ၏ value များ တူညီခဲ့မည် ဆိုပါက ရလဒ်သည် True ဟု၍ ထွက်လာမည်ဖြစ်သည်။ သို့သော် ရလဒ်သည် false ဟူ၍ ထွက်လာခြင်း ကြောင့် a နှင့်b ၏  list များသည် memory address မတူညီဘဲ တစ်နေရာချင်းစီတွင် သွားရောက်သိမ်းဆည်းသည် ဟူ ဆိုလိုနိုင်ပေသည်။

---