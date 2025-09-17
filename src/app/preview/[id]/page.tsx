import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArcaneTopbar from '@/components/ui/ArcaneTopbar';
import OffertrackbuttonActive from '@/components/ui/OffertrackbuttonActive';
import BonustrackbuttonInactive from '@/components/ui/BonustrackbuttonInactive';
import BGAll from '@/components/ui/BGAll';
import SwipingTabBar from '@/components/ui/SwipingTabBar';
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
  },
  {
    id: 'bonustrackbutton-inactive',
    name: 'Bonustrackbutton Inactive',
    description: 'Bonus track button (inactive state)',
    component: <BonustrackbuttonInactive />
  },
  {
    id: 'bg-all',
    name: 'Background Plane',
    description: 'Responsive background layer',
    component: <BGAll />
  },
  {
    id: 'swiping-tab-bar',
    name: 'Swiping Tab Bar',
    description: 'Responsive tab bar with overflow scroll and hexagonal design',
    component: <SwipingTabBar />
  }
];

export async function generateStaticParams() {
  return components.map(c => ({ id: c.id }));
}

export default function ComponentPreview() {
  return <ComponentPreviewClient components={components} />;
}