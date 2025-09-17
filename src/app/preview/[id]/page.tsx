import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArcaneTopbar from '@/components/ui/ArcaneTopbar';
import OffertrackbuttonActive from '@/components/ui/OffertrackbuttonActive';
import ComponentPreviewClient from './ComponentPreviewClient';

// Component registry - same as main preview
const components = [
  {
    id: 'arcane-topbar',
    name: 'Arcane Rush Topbar',
    description: 'Game topbar with character avatar and title',
    component: <ArcaneTopbar />
  },
  {
    id: 'offertrackbutton-active',
    name: 'Offertrackbutton Active',
    description: 'Special offer button (active state)',
    component: <OffertrackbuttonActive />
  }
];

export async function generateStaticParams() {
  return [
    { id: 'arcane-topbar' },
    { id: 'offertrackbutton-active' }
  ];
}

export default function ComponentPreview() {
  return <ComponentPreviewClient components={components} />;
}