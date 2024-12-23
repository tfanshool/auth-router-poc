import AppTileComponent from '@/components/features/dashboard/app-tile';

const cards = [
  {
    title: 'Move It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/nature'
  },
  {
    title: 'Use It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/city'
  },
  {
    title: 'Update It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/food'
  },
  {
    title: 'Schedule It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/food'
  },
  {
    title: 'Support It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/food'
  },
  {
    title: 'Maintain It',
    imageSrc:
      'https://images.pexels.com/photos/17407385/pexels-photo-17407385/free-photo-of-cute-pomeranian-puppy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/food'
  }
];

const IndexPage: React.FC = () => {
  return (
    <div className="gird-cols-2  grid gap-4 overflow-y-auto overflow-x-hidden md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {cards.map((card, index) => (
        <AppTileComponent
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default IndexPage;
