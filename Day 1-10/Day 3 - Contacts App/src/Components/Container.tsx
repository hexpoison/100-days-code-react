import Card from './Card'

function Container() {
  return (
    <div className='container'>
      <Card
        name="Karl Hudson"
        img="https://list.lisimg.com/image/7938847/740.jpg"
        phone="+184483929"
        email="karl@abc.com"
        address="2967 Cherry Camp Road"
      />
      <Card
        name="Bertha Ponce"
        img="https://pm1.narvii.com/6786/3ab53f04b6537008bdacd53e4b7f7b54c73ae277v2_hq.jpg"
        phone="+184483929"
        email="bertha72@gmail.com"
        address="482 Clement Street"
      />
      <Card
        name="Jake Morgan"
        img="https://i.ytimg.com/vi/ffjqkEHGL8g/hqdefault.jpg"
        phone="+1138484848"
        email="jake128@abc.com"
        address="738 Austio Street"
      />
      <Card
        name="Layla Sanchez"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.kdSEr6pOwyr2BcPnTbMPNQHaJQ%26pid%3DApi&f=1&ipt=06bdc800ee3cd54e31ab113a12cbbe314df283508b5341481f7ff33253a364cf&ipo=images"
        phone="+1138484848"
        email="layla128@abc.com"
        address="19 Fairfield Park"
      />
    </div>
  );
}

export default Container;
