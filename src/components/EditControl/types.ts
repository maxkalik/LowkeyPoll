export interface EditControlProps {
  labelLeftTitle: string;
  labelRightTitle?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  value: string;
}
