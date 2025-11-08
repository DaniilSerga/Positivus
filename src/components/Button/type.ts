export interface ButtonProps {
    label: string;
    color: 'primary' | 'secondary';
    onClick: () => void;
}