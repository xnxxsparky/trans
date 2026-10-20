// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   script.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: bcausseq <bcausseq@42angouleme.fr>         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/10/20 15:12:10 by bcausseq          #+#    #+#             //
//   Updated: 2026/10/20 23:26:53 by bcausseq         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// ---------------------------------------------------------------------------
// 1. List of wallpapers.
//    Filenames must match the files in your images/ folder EXACTLY
//    (including extension: .jpg vs .jpeg vs .png).
// ---------------------------------------------------------------------------
const WALLPAPERS = [
  "images/kanel.jpg",
  "images/llage.jpg",
  "images/ofc.gif",
  "images/yupoulet.jpg",
  "images/pdpusual.png",
];

// Key used to remember the last wallpaper shown (per tab).
const STORAGE_KEY = "wallpaperIndex";

// ---------------------------------------------------------------------------
// 2. Pick a random index, avoiding the same image twice in a row.
// ---------------------------------------------------------------------------
function pickIndex() {
  // Only one image? Nothing to randomise.
  if (WALLPAPERS.length === 1) return 0;

  const previous = sessionStorage.getItem(STORAGE_KEY);
  let index = Math.floor(Math.random() * WALLPAPERS.length);

  // If we happened to land on the same one as last time, nudge to the next.
  if (previous !== null && index === Number(previous)) {
    index = (index + 1) % WALLPAPERS.length;
  }

  sessionStorage.setItem(STORAGE_KEY, String(index));
  return index;
}

// ---------------------------------------------------------------------------
// 3. Apply it.
// ---------------------------------------------------------------------------
const wallpaper = document.querySelector(".wallpaper");

// Fade the wallpaper in only once it has finished loading.
wallpaper.addEventListener("load", () => {
  wallpaper.classList.add("is-ready");
});

wallpaper.src = WALLPAPERS[pickIndex()];
