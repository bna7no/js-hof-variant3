# Практична робота 8 — Функції вищого порядку

## Варіант 3 — Collection Utilities

## Опис

Проєкт реалізує набір утилітарних функцій для роботи з колекціями даних.

---

## Реалізовані функції

### groupBy(arr, key)

Групує об'єкти масиву за вибраним полем.

```js
groupBy(users, "group");
```

---

### sortBy(arr, key, direction)

Сортує масив об'єктів за вибраним полем.

```js
sortBy(users, "score", "desc");
```

---

### partition(arr, predicate)

Розділяє масив на дві групи за умовою.

```js
partition(users, user => user.score >= 80);
```

---

### pluck(arr, key)

Витягує значення певного поля з кожного об'єкта.

```js
pluck(users, "name");
```

---

### uniqBy(arr, key)

Повертає унікальні об'єкти за вибраним полем.

```js
uniqBy(users, "name");
```

---

## Використані підходи

- Higher-order functions
- Arrow functions
- map
- reduce
- sort
- filter
- Set
- Spread operator
- Pure functions

---

## Технології

- JavaScript
- HTML
- VS Code
- GitHub
- Live Server

---

## Автор

Nikita Bezpaliy