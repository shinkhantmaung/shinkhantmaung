---
title: Python Argument
image: 
publishedAt: 2020-05-01
description: Python တွင် အသုံးများသော  argument (၄)မျိုး ရှိသည်။၎င်းတို့မှာ အောက်ပါအတိုင်း ဖြစ်သည်။
slug: python-argument
isPublish: true
---
Python တွင် အသုံးများသော  argument (၄)မျိုး ရှိသည်။၎င်းတို့မှာ အောက်ပါအတိုင်း ဖြစ်သည်။

1. Positional argument
2. Arbitrary argument
3. Keyword only argument
4. End of positional argument

## Positional Argument

Positional Argument ဆိုသည်မှာ ပုံမှန် function call ခေါ်သောအခါတွင် ကျွန်တော်တို့ သက်မှတ်ထားသော  value အတိုင်း function ဆီသို့ argument အဖြစ် ပုံမှန်ဖြတ်သွားခြင်းကို ဆိုလိုသည်။ 

```
Program  
def greet(name,msg):  
    print("Hello", name + ', ' + msg)  
     
greet("Kate","Good Morning")  
greet("Bruce", "How do you do?")
```

အထက်ပါ program သည် ပုံမှန် နှုတ်ဆက်သည့် program ဖြစ်သည်။ program တွင် greet ဟူသော functuion တစ်ခု တည်ဆောက်ထားပြီး ၎င်းတွင် name,msg ဟူသော argument နှစ်ခုပါဝင်သည်။

ထို့နောက် ကျွန်တော်တို့ function call ခေါ်ပြီး value နှစ်ခု ထည့်လိုက်ပြီး run လိုက်သည်။

```
Result  
Hello Kate, Good Morning                                                                                                              
Hello Bruce, How do you do?
```

ဤတွင် ပထမ value Kate သည် greet function မှ ပထမ argument  name  ကို ဖြတ်သန်းသွားပြီး   print ထုတ်သည့်နေရာသို့ ရောက်သွားသည်။ ဤနည်းဖြင့် ကျန်ကုဒ်များ သည် ဆက်လက် အလုပ်လုပ်သွားသည်။

## Arbitrary Argument

Argument တွေဆိုသည်မှာ ကျွန်တော်တို့ function တွေမှာ ဖြတ်သန်းသွားတဲ့ အရာလေးတွေဖြစ်ပါသည်။ ဥပမာအနေဖြင့် အောက်ပါ program ဖြင့် argument ကို function တစ်ခုမှာ သုံးပြသွားပါမည်။ 

```
def myFun(a,b):  
    print(a,b)  
myFun(1,2)  
  
Result  
1,2
```

ယခု program သည် ကျွန်တော်တို့ ထည့်လိုက်သော argument တွေကို print ထုတ်သည့် function တစ်ခုဖြစ်သည်။argument a နှင့် b တို့သည် ကျွန်တော်တို့ ခေါ်ထားသော function  myFun မှ ၁ နှင့် ၂ ထည့်ထားသောကြောင့် ၁ နှင့် ၂ argument မှတစ်ဆင့် သည် ဖြတ်သန်းသွားသည်။ ထို့ကြောင့် ကျွန်တော်တို့ ထည့်ထားသော 1 နှင် 2 သည် ရလဒ် အဖြစ် ထွက်လာရသည်။ အကယ်၍ ကျွန်တော်တို့ ယခု function တွင် ကိန်းဂဏန်း နှစ်လုံးအပြင် နောက်ထပ် နှစ်လုံး ထပ်မံထည့်၍ run ကြည့်ရင် ဆိုရင်ရော ။ 

```
def myFun(a,b):

        print(a,b)  
myFun(1,2,3,4)  
  
Result  
Error
```

ကျွန်တော်တို့  run ကြည့်မည်ဆိုလျှင် error တက်နေမည် ဖြစ်သည်။ အဘယ်ကြောင့် ဆိုသော် ကျွန်တော်တို့ ရေးထားသော positional argument သည် နေရာစာ အတွက်သာ ရှိသောကြောင့် ပင် ဖြစ်သည်။ ဤကဲ့သို့ ကျွန်တော်တို့ နောက်ထပ် မည်မျှ ဝင်လာမည် မသိသော object များအတွက် postional argument နှင့် ရေးရန် အဆင်မပြေတော့ပေ။ ဤနေရာတွင်  postional argument အစား  arbitirary argument အား အသုံးပြ၍ ရပေသည်။ အထက်ပါ program ကိုပဲ arbitirary argument သုံး၍ ထုတ်သွားပါမည်။ 

```
def myFun(a,b,*c):  
    print(a)  
    print(b)  
    print(c)  
myFun(1,2,3,4)  
  
Result  
1  
2  
(3,4)
```

ထို့သို့ arbitirary argument သုံး၍ run ကြည့်သောအခါတွင် ကျွန်တော်တို့ arbitirary argument `(*)` ဖြင့် ခေါ်ထားသော c သည် ကျန်ရှိသော ကိန်း ၃ ၄ တို့အား tuple  ပုံစံဖြင့် ထွက်လာသည်ကို တွေ့ရမည် ဖြစ်သည်။ ဤတွင် သတိပြုရသည်မှာ arbitirary argument သည် end of positional argument ဖြစ်သည့် အတွက်ကြောင့် ကျွန်တော်တို့သည် arbitirary argument ရေးရာတွင် နောက်ဆုံးတွင်သာ ထားရေးသင့်သည်။ ဆိုလိုသည်မှာ အောက်ပါအတိုင်း arbitirary argument ဖြင့် b တွင် သုံး၍ ရေးထားသည်။ သို့သော် run ကြည့်ပါက arbitirary argument သည် end of positional argument ဖြစ်သည့် အတွက်ကြောင့် error တက်မည် ဖြစ်သည်။ ထို့ကြောင့်ဤ ကုဒ်တွင် c argument ကဲ့သို့သော positional argument များအား  arbitirary argument ရှေ့တွင်သာ ရေးသင့်ပေသည်။

```
def myFun(a,*b,c):  
    print(a)  
    print(b)  
    print(c)  
myFun(1,2,3,4)  
  
Result

Error
```

arbitirary argument သုံး၍ ရေးခြင်းဖြင့် အသုံးပြုသူထံမှ မည်မျှဝင်လာမည် မသိသော ဒေတာများအား  function တစ်ခုတွင် လက်ခံဖြတ်သန်းနိုင်မည် ဖြစ်သည်။arbitriary argument ဖြင့် simple program များရေးကြည့်ပါမည်။
 

**Simple Program**

```
def greet(*names):  
    for name in names:

        print("Hello", name)  
  
greet("Mg Mg", "Ma Ma", "Zaw Zaw", "Aung Aung")  
  
Result  
Hello Mg Mg                                                                                                                           
Hello Ma Ma                                                                                                                           
Hello Zaw Zaw                                                                                                                         
Hello Aung Aung
```
## Keyword only argument

Keyword only argument ဆိုသည်မှာ ကျွန်တော်တို့ arbitrary argument တွင် မရနိုင်သော အချက်ဖြစ်သည့် positional argument များအား  arbitirary argument နောက်တွင် သာ ရေး၍မရသော အချက် အား ကျွန်တော်တို့ ယခု keyword only argument ဖြင့် ဖြေရှင်းနိုင်သည်။ Keyword only argument ၏ပုံစံ သည် အောက်ပါအတိုင်း ဖြစ်သည်။

Program

```
def myFun(a,b,c):  
    print(a)  
    print(b)  
    print(c)  
myFun(1,2,c=10)  
  
  
Result  
1  
2  
10
```

ဤကုဒ်တွင် ကျွန်တော်တို့ function တစ်ခုကို argument သုံးခုဖြင့် တည်ဆောက်ထားပြီး ၎င်း function ကို ပြန် call ထားသည်။ ဤတွင် ထူးခြားသည်မှာ နောက်ဆုံးကို argument  c ကို ကျွန်တော် သည်   ရလဒ် 10 ထွက်စေချင်သည့်အတွက် keyword only argument ဖြင့် argument c အား  (=) sign ခံကာ value 10 ဟူ၍ ရေးထားသည်။ ထို့ကြောင့် c ၏ ရလဒ် သည်  ၁၀ ထွက်လာသည်။ 

အထက်ပါ ကုဒ်အတိုင်း နှင့်ပင် list တစ်ခုမှ function တစ်ခု ကို ဖြတ်၍ သွားခြင်းကို ဆက်သွားပါမည်။ ဤကုဒ်တွင် ကျွန်တော်တို့ myFun ဆိုသော function တစ်ခုအား argument သုံးခုဖြင့် တည်ဆောက်ထားသည်။ထို့နောက် ကျွန်တော်တို့ function call ပြီး value ထည့်ပြီး run အစား ကျွန်တော်တို့ value ကို list ပုံစံဖြင့် ပထမဇယားပါ အတိုင်း myList ဟူသော list တစ်ခု တည်ဆောက်ပြီး ကျွန်တော်တို့ ထည့်လိုသော value များကို ထည့်လိုက်သည်။ သို့သော် run ကြည့်ပါက erro တက်မည် ဖြစ်သည်။ အဘယ်ကြောင့် ဆိုသော် myFun(myList) function call ရာတွင် myList သည် function မှ argument a တစ်ခုတည်း အဖြစ်သာ ဖြတ်သန်းသွားပြီး ကျန် argument b နှင့် c တို့အတွက် value မပါရှိခြင်းကြောင့် error တက်ခြင်း ဖြစ်သည်။ 

ယင်း ပြဿနာအား arbitirary aegument အတိုင်းပင် function call တွင် myList ရှေ့တွင် `(*) sign` ခံခြင်းဖြင့် ယင်း error အား ရှင်းနိုင်သည်။

```
Program  
def myFun(a,b,c):  
    print(a)  
    print(b)  
    print(c)  
  
myList=[1,2,3]  
myFun(myList)  
  
Result  
Error  
TypeError: myFun() missing 2 required positional arguments: 'b' and 'c'
```
  

```
Program  
def myFun(a,b,c):  
    print(a)  
    print(b)  
    print(c)  
  
myList=[1,2,3]  
myFun(*myList)  
  
Result  
1  
2  
3
```
  

ဆက်လက်ပြီး ယခု ကုဒ်တွင် ပါသည့် list ၏ value အရေအတွက်သည် argument အရေအတွက် နှင့် ကိုက်ညီမှု မရှိခဲ့လျှင် အထက်တွင် ပြောခဲ့သည့် arbitrary argument သုံး၍ ရှင်းနိုင်သည်။ သို့သော်  positional argument များအား  arbitirary argument နောက်တွင် ရေးချင်သည့် အတွက်ကြောင့် arbitrary argument အစား keyword only argument ဖြင့် သုံးရေးသွားပါမည်။

```
  Program  
def myFun(a,b,*c,d):  
    print(a)  
    print(b)  
    print(c)  
    print(d)  
myList=[1,2,3,5,4]  
myFun(*myList)  
  
Result  
error
```

```
Program  
def myFun(a,b,*c,d):  
    print(a)  
    print(b)  
    print(c)  
    print(d)  
myList=[1,2,3,5]  
myFun(*myList,d=4)  
  
Result  
1                                                                                                                                     
2                                                                                                                                     
(3, 5)                                                                                                                                
4
```
  

ယခုကုဒ်တွင် ပထမဇယားတွင် မြင်သည့်အတိုင်းပင် value နှင့် argument အရေအတွက် မမျှ၍ argument c ၌ arbitrary argument သုံး၍ ရေးထားသည်။ သို့သော်ကျွန်တော်တို့သည် d  ၏ ရလဒ်အား ၄ အဖြစ်သာ ထွက်လိုသည်။သို့သော် d ကဲ့သို့သော positional argument များအား  arbitirary argument နောက်တွင် သာ ရေး၍မရသောကြောင့် ဒုတိယဇယားပါအတိုင်း keyword only argument  သုံး၍ ထုတ်သွားပါမည်။ ထို့ကြောင့် ကျွန်တော်တို့ function call  ရာတွင် d=4 ဟူ၍ d key သည် value 4 ဖြစ်သည် ဟု သက်မှတ်လိုက်သည့်သဘောပင်ဖြစ်သည်။ ထို့ကြောင့် run ကြည့်ရာတွင် d ကို 4 ဟု ရလဒ်ထွက်လာသည်ကို မြင်တွေ့ရမည် ဖြစ်သည်။ 

## Keyword Argument

         ကျွန်တော်တို့ keyword only argument အပြင် နောက်ထပ်တစ်မျိုး မှာ keyword argument ဖြစ်သည်။ keyword only argument နှင့် keyword argument တို့သည် မတူညီကြသော argument များ ဖြစ်ကြသည်။ အဘယ်ကြောင့် ဆိုသော် ကျွန်တော်တို့ keyword only argument ကို ရေးမည် ဆိုပါက (=) sign ဖြင့်  key နှင့် value တွဲ၍ ရေး၍သည် ဖြစ်ပြီး ယခု keyword argument တွင်မူ (**) နှစ်လုံးဖြင့် ရေးရသည် ဖြစ်သောကြောင့် ၎င်းတို့ argument နှစ်ခု သည် မတူညီသော argument များ ဖြစ်ကြသည်ဟု ဆိုနိုင်ပေသည်။ keyword argument တွင် ထူးခြားသည်မှာ ကျွန်တော်တို့ program run ပြီး ၎င်းကို print ထုတ်ကြည့်မည် ဆိုပါက ပုံမှန် arbitrary argument များတွင် tuple ပုံစံဖြင့် ပေးသည် ဖြစ်သော်လည်း keyword argument တွင်မူ dictionary ပုံစံဖြင့် ပေးသည်။ ထို့ကြောင့် ကျွန်တော်တို့ key ရော ၊ value ပါ လိုချင်သော အခြေအနေမျိုးတွင် ယခု keyword  argument ဖြင့် ရေးနိုင်မည် ဖြစ်သည်။ နောက်တစ်ချက်မှာ keyword argument တွင် ကျွန်တော်တို့ ရေးလိုက်သော argument နောက်တွင် အခြားသော argumentများ ထပ်ထည့်၍ ရေးလိုရမည် မဟုတ်ပေ။

Program

```
def myFun(**key):  
    print(key)  
myFun(a=10,b=20,c=30)
```

ကျွန်တော်တို့ သည် ယခု program တွင် keyword argument ဖြင့် `(**)` နှစ်လုံး သုံးကာ myFun  ဟူသော အမည်ဖြင့်  function တစ်ခုကို တည်ဆောက်ပါသည်။ အဆိုပါ  function အတွင်းတွင် ကျွန်တော်တို့ function call ခေါ်သောအခါ ထည့်လိုက်မည့် argument များကို print ထုတ်ပါမည်။ ထို့နောက် myFun  function ကို ခေါ်ကာ a=10 ဟူ၍ key နှင့် value ထည့်၍ ရေးလိုက်သည်။ ပြီးလျှင် program အား run ကြည့်ပါမည်။

Result

```
{'c': 30, 'a': 10, 'b': 20}
```
 
 Run ကြည့်သောအခါ မြင်တွေ့ရသည့်အတိုင်းပင် ရလဒ်သည် dicitionary ပုံစံဖြင့် ကျွန်တော်တို့ ထည့်လိုက်သောkeyရော value ပါ ထွက်လာသည်ကို တွေ့ရမည်ဖြစ်သည်။ ထို့ကြောင့် ကျွန်တော်တို့ key ရော ၊ value ပါ လိုချင်သော အခြေနေမျိုးတွင် ယခု keyword argument  အား အသုံးပြုနိုင်မည် ဖြစ်သည်။

## End of Positional Argument

End of Positional Argument ကို ရေးသော ပုံစံမှာ`(*)` တစ်လုံးတည်းဖြင့် ရေးခြင်း ဖြစ်ပြီး အောက်တွင် ဖော်ပြထားသော  program ပါအတိုင်း ဖြစ်သည်။ ကျွန်တော်တို့ ပုံမှန် arbitirary argument တွင် `(*) star`  နောက်တွင် variable တွေပါလေ့ရှိသော်လည်း ယခု End of Positional Argument တွင် မူ မပါဝင်ပဲ `(*) star` တစ်လုံးတည်းပင် ဖြစ်သည်။

Program

```
def myFun(a,b,*,c):  
print(a)  
print(b)  
print(c)  
myFun(1,2,c=3)
```

ကျွန်တော်တို့ ယခုရေးထားသော program တွင် myFun  ဟူသော အမည်ဖြင့် function တစ်ခု တည်ဆောက်ထားပြီး ၎င်းတွင် a နှင့် b  positional argument နှစ်ခုကို ရေးထားပြီး ၎င်းနောက်တွင်  `star(*)`  တစ်လုံးတည်းဖြင့် ရေးထားသော End of Positional Argument ကို တွေ့မြင်ရမည်ဖြစ်ကာ ဆက်လက်ပြီး c ဟူသော keyword only argument အား ရေးထားသည်။ ၎င်းအား run ကြည့်မည် ဆိုပါက အောက်ပါအတိုင်း ရလဒ် ထွက်လာမည်ဖြစ်သည်။

```
Result  
1  
2  
3
```

ကျွန်တော်တို့ function တွေေမှာ positional argument များကို ကိုယ်ဖြတ်စေချင်လိုသော အလုံးအရေအတွက် ထက်ပို၍ မဖြတ်စေချင်လိုသော အချိန်မျိုးတွင် ယခု End of Positional Argument ကို အသုံးပြုနိုင်မည် ဖြစ်သည်။ ထို့အပြင် End of Positional Argument နောက်တွင် positional argument နှင့် arbitrary argument  တို့ကို ရေး၍ ရမည် မဟုတ်ဘဲ Keyword argument နှင့် keyword only argument တို့သာ ရေး၍ ရမှာ ဖြစ်သည်။

## End of Positional Argument နှင့် Keyword argument

Python ၏ argument နှစ်ခုဖြစ်ကြသော End of Positional Argument နှင့် Keyword argument နှစ်ခုကို အတူတူ တွဲ၍ သုံးမည် ဆိုပါက အနည်းငယ် ပြဿနာ ရှိပေသည်။ ယင်းမှာ အောက်ပါအတိုင်း End of Positional Argument နှင့် Keyword argument ကို တွဲ၍ သုံးမရခြင်းပင်ဖြစ်သည်။ သို့သော် ၎င်းတို့အကြားတွင် Keyword only argument ထည့်၍သုံးပေးခြင်းဖြင့် ယခုပြဿနာအား ရှင်းနိုင်မည် ဖြစ်သည်။

```
Program  
def myFun(a,b,*,,**kw):  
    print(a)  
    print(b)  
    print(kw)  
myFun(a=10,b=20,c=30)
```
ထို့ကြောင့် ယခု program ကိုပင် keyword only argument ကြားခံ၍ ရေးပါမည်။

```
Program  
def myFun(a,b,*,koa,**kw):  
    print(a)  
    print(b)  
    print(kw)  
    print(koa)  
myFun(a=10,b=20,c=30,koa=101)  
```

ကျွန်တော်တို့သည် myFun ဟူသော function တစ်ခုကို တည်ဆောက်ပြီး ၎င်းတွင် End of Positional Argument နှင့် Keyword argument ပါရှိသည်ကို မြင်တွေ့ရမည် ဖြစ်ပြီး ၎င်းတို့ အကြားတွင် koa ဟူသော အမည်ဖြင့် Keyword  only argument ကို ထည့်ရေးလိုက်ပါသည်။ ထို့နောက် function call ခေါ်ပြီး a=10,b=20,c=30,koa=101 ဟူ၍ ထည့်ပါသည်။ ပြီးလျှင် ယခု program အား run ကြည့်ပါမည်။

Result

```
10                                                                                                                                    
20                                                                                                                                    
{'c': 30}                                                                                                                             
101
```

ထို့အခါ argument a နှင့် b သည် 10  နှင့် 20 ဟူ၍ လည်းကောင်း ၊ koa ဟူသော Keyword  only argument သည် 101 ဟူ၍ လည်းကောင်း ၊ Keyword  argument ဖြစ်သော kw သည် dicitionary ပုံစံဖြင့် ရလဒ် ထွက်လာမည် ဖြစ်သည်။ ထို့ကြောင့် ကျွန်တော်တို့ End of Positional Argument နှင့် Keyword argument နှစ်ခုကို အတူတူ တွဲ၍ သုံးမည် ဆိုပါက keyword argument အား ကြားခံ ထည့်၍ သုံးနိုင်မည် ဖြစ်သည်။

---