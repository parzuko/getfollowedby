# Followed By - Website

ever visit someone’s GitHub profile and wonder — hmm, do we know each other? well here’s an easy fix to traverse the builders social graph: ✨ [getfollowedby.xyz](https://getfollowedby.xyz) ✨

`followedby` uses GitHub’s public API to fetch mutual followers for every profile you visit, straight to the profile page!

<div align="center">
  <img src="public/assets/landing.png" width=700 />
</div>

## 🫣 design inspiration?

while designing the extension, I wanted it to feel as close to a product by GitHub itself. this design choice was inspired by my own opinionated mindset about third party injected scripts (?). following (haha) this principle; `getfollowedby`'s design is ~~inspired~~ stolen from [GitHub's Copilot](https://github.com/features/copilot)

<details>
  <summary>FollowedBy Homepage  vs Github Copilot</summary>
  <table align='center'>
    <tr>
        <td> <img src="public/assets/copilot_landing.png" alt="Drawing"  style="width: 500px;"/> </td>
        <td> <img src="public/assets/gfb_landing.png" alt="Drawing" style="width: 500px;"/> </td>
    </tr>
  </table>
</details>

## 🤓 what's the tech?

1. [`TailwindCSS`](https://tailwindcss.com)
2. [`TypeScript`](https://www.typescriptlang.org/)
3. [`NextJS`](https://nextjs.org/)

## 🛠 want to install `getfollowedby`, locally?

```bash
git clone https://github.com/parzuko/getfollowedby.git
cd getfollowedby

yarn && yarn dev # installs packages + starts server at port 3000!
```

made for fun, and maybe for myself ✌️

[say hi](https://twitter.com/parzuko) :)
