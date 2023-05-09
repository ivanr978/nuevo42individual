Fancybox.bind('[data-fancybox="gallery"]', {
  Images: {
    content: (_ref, slide) => {
      let rez = "<picture>";
      const media = slide.media.split(";");
      slide.sources.split(";").map((source, index) => {
        rez += `<source
media="${media[index] || ""}"
srcset="${source}"
/>`;
      });
      rez += `<img src="${slide.src}" alt="" />`;
      rez += "</picture>";
      return rez;
    }
  }
});