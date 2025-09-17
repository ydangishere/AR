export default function ArcaneTopbar() {
  return (
    <div 
      className="w-full relative"
      style={{ height: '52px' }}
    >
      <div 
        className="absolute w-full"
        style={{
          right: '0%',
          bottom: '0px',
          left: '0%',
          height: '52px'
        }}
      >
        <div 
          className="absolute w-full"
          style={{
            right: '0%',
            bottom: '0px',
            left: '0%',
            backgroundColor: '#2b5d73',
            height: '52px'
          }}
        />
        <img
          className="absolute w-full max-w-full overflow-hidden object-cover"
          style={{
            right: '0%',
            bottom: '0px',
            left: '0%',
            height: '5px'
          }}
          width={390}
          height={5}
          sizes="100vw"
          src="/assets/components/arcane-topbar/header2.png"
          alt=""
        />
      </div>
      
      <img
        className="absolute object-cover"
        style={{
          top: '4px',
          left: '43px',
          width: '186px',
          height: '39px'
        }}
        width={186}
        height={39}
        sizes="100vw"
        src="/assets/components/arcane-topbar/character-avatar.png"
        alt=""
      />
      
      <img
        className="absolute"
        style={{
          top: '19px',
          left: '14px',
          width: '14px',
          height: '10px'
        }}
        width={14}
        height={10}
        sizes="100vw"
        src="/assets/components/arcane-topbar/menu-icon.png"
        alt=""
      />
      
      <img
        className="absolute"
        style={{
          top: '11px',
          right: '13px',
          width: '26px',
          height: '26px'
        }}
        width={26}
        height={26}
        sizes="100vw"
        src="/assets/components/arcane-topbar/user-icon.png"
        alt=""
      />
    </div>
  );
}