export type MenuListType = {
    title: string;
    icon: JSX.Element;
    path: string;
}

export type FooterListType = {
    title: string;
    icon: JSX.Element;
    text: string;
}

export type FlashThemeListType = {
  title: string;
  url: string;  
  alt: string;
  id: number;
}

export type tattooImageType = {
    id: number,
    Picture: pictureType[],
  }
  
export type pictureType = {
    url: string,
  }

export type FlashThemeType = {
  id: number,
  name: string,
  image: string,
}