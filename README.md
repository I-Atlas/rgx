# [RGX](https://rgx.vercel.app/)

![GitHub](https://img.shields.io/github/license/I-Atlas/rgx?style=flat-square)

<a href="https://rgx.vercel.app/">
    <img src="https://i.imgur.com/D1FOJUr.png" alt="RGX">
</a>

## ⚓ Regular Expression Collection

A set of ready-made regular expressions. Open-source project and everyone can help in development.

## 📔 Patterns

All patterns are contained in the patterns.json file. Each pattern has a localization for Russian and English. To add your own pattern, create a **pull request** respecting the following pattern:

```json
{
  "title": {
    "en": "Title in english",
    "ru": "Title in russian"
  },
  "pattern": "/(.*?)/",
  "placeholder": "https://youtu.be/dQw4w9WgXcQ",
  "description": {
    "en": "Description in english",
    "ru": "Description in russian"
  },
  "tags": "youtube,url,tags",
  "nickname": "your nickname",
  "priority": 2
}
```

## 👨‍💻 Technologies used

- TypeScript
- React
- SCSS
- Immer
- Framer Motion
- React Helmet

## 📑 License

The project is licensed under the [Apache license 2.0](https://github.com/I-Atlas/rgx/blob/main/LICENSE).
