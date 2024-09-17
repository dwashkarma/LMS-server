export class CreateCourseDto {
  title: string;
  description: string;
  author: string;
  courseCategory: string;
  subCategory: string;
  language: 'EN' | 'NP';
  tag: string;
  rating?: number;
  purchase: {
    amount: number;
    currency: string;
    priceString: string;
    currencySymbol: 'NRS' | '$';
  };
}
