import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://picsum.photos/200'
        alt='logo'
      />
    </div>
  );
}

export default Logo;
