export interface ContentStructure {
  header: {
    tab1: string;
    tab2: string;
    tab3?: string;
  };
  footer: {
    aboutUs: string;
    address: string;
  };
  home: {
    title: string;
    subTitle: string;
    tagLine: string;
  };
}
