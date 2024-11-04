---
title: Git Branch Naming Conventions
image: /assets/08.jpg
publishedAt: 2024-09-27
description: Git Branch အမည်ပေးခြင်းအနုပညာ
slug: Git Branch Naming Conventions
isPublish: true
---
![](../../../public/assets/08.jpg)
Git ဆိုတာ ကွန်ပျူတာအတွက် အလွန် အသုံးဝင်တဲ့ Version Control System တစ်ခုပါ။ တစ်ယောက်တည်း ကုဒ်တဲ့အခါမှတော့ ဘာမှမဖြစ်ပေမယ့် အဖွဲ့လိုက် လုပ်တာဆိုရင်တော့ Git Branch အမည်တွေကို စနစ်တကျ ပေးထားရင် ချစ်စရာကောင်းသလို အလုပ်လည်းတွင်လို့ တကယ်ကို အဆင်ပြေစေမှာပါ။ ဒီတစ်ခုက ကျွန်တော် ပြန်ဖတ်ဖို့ရေးသားထားတာပါ။

### အခြေခံ စည်းကမ်း တချို့

- **အသေးစာလုံးနဲ့ Hyphen ခွဲပါ**: Branch နာမည်တွေကို lowercase နဲ့ရေးပါ။ နှစ်လုံးထက် ပိုတဲ့ စကားလုံးတွေကို hyphen နဲ့ ခွဲပါ။ ဥပမာ - `feature/new-login` ဒါမှမဟုတ် `bugfix/header-styling` လိုပေါ့။
  
- **စာလုံးနဲ့ဂဏန်းပဲသုံးပါ**: အက္ခရာ (a-z), ကိန်းဂဏန်း (0-9), hyphen (-) တို့ကိုပဲ သုံးပါ။ Punctuation, space, underscore စတာတွေကို မထည့်ပါနဲ့။ 
  
- **ဆက်တိုက် Hyphen မသုံးပါနဲ့**: `feature--new-login` ဆိုပြီး continuous hyphen တွေပါရင် ဖတ်ရတာ ခက်နိုင်ပါတယ်။
  
- **နောက်ဆုံး Hyphen မပါစေချင်ဘူး**: Branch နာမည် အဆုံးမှာ hyphen မပါဖို့ လိုအပ်ပါတယ်။ ဥပမာ - `feature-new-login-` ဆိုရင် စနစ်မကျဘူးလေနော်။
  
- **ရှင်းလင်းပါစေ**: Branch အမည်တွေက အတိုချုံးပြီး အလုပ်ရော အလုပ်အကြောင်းကို ရှင်းလင်းစွာ ဖော်ပြထားပါစေ။

### Prefix သုံးဖို့အကြံပြုချက်

Branch အမျိုးအစားကို အမြန်ဆုံး သိနိုင်ဖို့ prefix တွေကို သုံးသင့်ပါတယ်။ အလေ့ကျ Prefix များနဲ့ ဥပမာတွေကို ဖော်ပြထားပါတယ် -

- **Feature Branches**: အသစ် feature တစ်ခု ဖန်တီးတဲ့အခါ `feature/` prefix သုံးပါ။ ဥပမာ - `feature/login-system`။
  
- **Bugfix Branches**: Bug တွေကို ပြင်ဖို့ဆိုရင် `bugfix/` prefix သုံးပါ။ ဥပမာ - `bugfix/header-styling`။
  
- **Hotfix Branches**: အရေးပေါ် ပြင်တဲ့ အခါမှာ `hotfix/` prefix သုံးရပါမယ်။ ဥပမာ - `hotfix/critical-security-issue`။
  
- **Release Branches**: အသစ် release တစ်ခု လုပ်ဖို့ဆိုရင်တော့ `release/` prefix နဲ့သုံးပါ။ ဥပမာ - `release/v1.0.1`။
  
- **Documentation Branches**: Documentation တွေ ဖန်တီးတဲ့အခါ `docs/` prefix သုံးပါ။ ဥပမာ - `docs/api-endpoints`။

Git မှာ Branch နာမည်ပေးပုံစံတွေကို လှလှပပနဲ့ စနစ်တကျပေးထားရင် အဖွဲ့လိုက် အလုပ်လုပ်တဲ့အခါ အလုပ်သွက်စေတဲ့အပြင် မြင်လိုက်တာနဲ့ ဘာအတွက်ဆိုတာကို ရှင်းလင်းစွာ နားလည်စေနိုင်မှာပါ။