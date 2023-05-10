const Contacts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center mt-1">
        <div className="pt-5">
          <h3 className="text-3xl font-bold text-center">
            上海菲世科技有限公司
          </h3>
          <h4 className="text-xl text-center">
            Shanghai Fancy Technology Co. Ltd
          </h4>
        </div>
        <div className="mt-5 w-full max-w-md">
          <div className="flex flex-col">
            <h2 className="md:text-xl font-bold mb-2 text-center">Contact Us</h2>
            <hr className="w-full mb-2"></hr>
            <ul className="text-sm md:text-xl mt-5">
              <li className="mb-2">
                Email:&nbsp;
                <a
                  href="mailto:fancyartsy82@gmail.com"
                  className="email-link ml-2"
                >
                  fancyartsy82@gmail.com
                </a>
              </li>
              <li className="mb-2 ml-11 md:ml-16">
                <a href="mailto:lxy198281@163.com" className="email-link ml-2">
                  lxy198281@163.com
                </a>
              </li>
              <li className="mb-2">
                Phone: &nbsp;+86 134 0169 3760 (China)
              </li>
              <li className="mb-2 md:ml-16">&nbsp;
              +63 096 1271 8816 (Philippines)
              </li>
              <li className="mb-2">
                Viber: &nbsp;&nbsp;+63 096 1271 8816
              </li>
              <li className="mb-2">
                WhatsApp:&nbsp; +63 096 1271 8816
              </li><br></br>
              <li className="mb-2">
                Address:&nbsp; 199#, Qianyu Public Road, Chenjia Town, Chongming
                District, Shanghai 202150, China
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts