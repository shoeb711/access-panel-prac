export interface FormItem {
  id: string;
  type: string;
  label: string;
  options?: string[];
}

export interface CardData {
  select: string;
  checkbox: string;
  text: string;
}

export interface FormDataType {
  [id: string]: string | boolean | undefined;
}
