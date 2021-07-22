---
title: 04 - Array Cardi Day 1
tags: JavaScript30
abbrlink: 31604
date: 2021-07-22 17:32:40
---
學習幾個運算 Array 的方法！有趣！

# 第一題 Filter the list of inventors for those who were born in the 1500's

- filter:利用條件篩選出原陣列中符合條件的物件

```jsx
let born1500s = inventors.filter((value, index, arr) => {
                return value.year < 1600 && value.year >= 1500;
            });
							console.log(born1500s);
```

# 第二題 Give us an array of the inventors first and last names

- Array.prototype.map()

```jsx
let allName = inventors.map((item, index, arr) => {
                return item.first + " " + item.last;
            });
						console.log(allName);
```

# 第三題 Sort the inventors by birthdate, oldest to youngest

- Array.prototype.sort()

```jsx
const sorted = inventors.sort(function (a, b) {
                if (a.year > b.year) {
                    return 1;
                } else {
                    return -1;
                }
            });
```

# 第四題 How many years did all the inventors live all together?

- Array.prototype.reduce()

```jsx
let allYears = inventors.map((item, index, arr) => {
                return item.passed - item.year;});
let calcSim = allYears.reduce((prev, curr) => prev + curr);
console.log(calcSim);
```

# 第五題 Sort the inventors by years lived

```jsx
let openInventors = [...inventors].sort((a, b) => {
                return b.passed - b.year - (a.passed - a.year);
            });

						console.log(openInventors);
```

# 第六題 create a list of Boulevards in Paris that contain 'de' anywhere in the name

- [https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)
- 爬蟲初體驗

```jsx
const firstDataHalf = document.querySelectorAll(".mw-category li");
              let firstData = [...firstDataHalf];
              let mapfirstData = firstData.map(x => x.textContent);
              console.log(mapfirstData);
              let result = mapfirstData.filter(value => value.match("de"));
              let result = mapfirstData.filter(value => value.includes("de"));

              console.log(result);
```

# 第七題 Sort the people alphabetically by last name

- 三元運算子

```jsx
const lastName = inventors.sort((a, b) => (a.last > b.last ? 1 : -1));
console.table(lastName);
```

# 第八題 Sum up the instances of each of these

- allNames[each]++

```jsx
let countData = data.reduce((allNames, each) => {

                if (each in allNames) {
                    allNames[each]++;
                } else {
                    allNames[each] = 1;
                }
                return allNames;
            }, {});
console.table(countData);
```

# Reference material

with my friends ♥