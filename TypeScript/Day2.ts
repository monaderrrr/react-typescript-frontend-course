
// Day 2 - TS
// tsc اسم الملف -> work a compiler transfer ts to js

// tsc --init -> عشان اعمل ملف tsconfig.json اللي بيحتوي علي كل ال options اللي ممكن استخدمها مع ال tsc
// اي الحاجات ال عاوز اول حاجه  root Dir ->./src
// outDir ->./dist

// tsc -> عشان يترجم كل الملفات اللي في ال src ويطلعها في ال dist

// اي الفرق بين  typeAnnotatios VS typeInference
// typeAnnotatios -> لما انا بحدد نوع المتغير بنفسي As Developer
// typeInference -> لما TypeScript بيحدد نوع المتغير بناء علي القيمة اللي انا بعطيها Ts Job
// /example
let username:string; //typeAnnotation
// ليه عشان اليوزر دايما string
// لو هحط const لازم احدد النوع ال هستخدمه
