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

export type tattooImageType = {
    id: number,
    Picture: pictureType[],
  }
  
export type pictureType = {
    url: string,
  }