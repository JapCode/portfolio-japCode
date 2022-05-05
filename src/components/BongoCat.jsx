import { useEffect, useRef, useMemo, useCallback, forwardRef } from 'react';

// import useIntersectionObserver from '../hooks/UseIntersectionObserver';
// import waitFor from '../utils/waitFor';
import bongoCatAnimation from '../utils/bongoCatAnimation';
import resetBongoCatAnimation from '../utils/resetBongoCatAnimation';

// function BongoCat(prop)
const BongoCat = forwardRef((prop, ref) => {
  const { visible } = prop;
  // const offsetY = useParallax();
  // const [containerRef, isVisible] = useIntersectionObserver({
  //   rootMargin: '0px',
  //   threshold: 0.8,
  // });
  // const [imARef, isVisible2] = useIntersectionObserver({
  //   rootMargin: '0px',
  //   threshold: 0.8,
  // });
  // const [pawLeftUp, setPawLeftUp] = useState(true);
  // const [pawRightUp, setPawRightUp] = useState(false);
  // const [startAnimation, setStartAnimation] = useState(false);
  const cat = useRef(null);
  const pawLeftUp = useRef(null);
  const pawRightUp = useRef(null);
  const pawLeftDown = useRef(null);
  const pawRightDown = useRef(null);
  const bongoCatInterval = useRef(null);
  const bongoColorBody = '#CCCCCC';
  const bongoColorPaw = '#e6b3dc';
  const config = useMemo(() => {
    return {
      pawLeftUp,
      pawLeftDown,
      pawRightUp,
      pawRightDown,
    };
  }, [pawLeftUp, pawLeftDown, pawRightUp, pawRightDown]);
  const catCallback = useCallback(() => {
    bongoCatAnimation(config, bongoCatInterval);
  }, [bongoCatInterval, config]);
  // const config = {
  //   pawLeftUp: pawLeftUp.current,
  //   pawLeftDown: pawLeftDown.current,
  //   pawRightUp: pawRightUp.current,
  //   pawRightDown: pawRightDown.current,
  // };

  useEffect(() => {
    if (!visible) {
      if (bongoCatInterval.current) {
        clearInterval(bongoCatInterval.current);
      }
      resetBongoCatAnimation(config);
    }
  }, [config, visible]);
  const handleAnimation = () => {
    if (visible) {
      // bongoCatAnimation(config, bongoCatInterval);
      catCallback();
    }
  };

  return (
    <svg
      // ref={imARef}
      id="bongoCat"
      className="bongoCat"
      width="270"
      height="126"
      viewBox="0 0 270 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_679_2795)">
        <rect width="270" height="126" fill="white" />

        <g>
          <g
            onTransitionEnd={handleAnimation}
            ref={cat}
            className={`cat ${visible ? 'cat--visible' : ''}`}
          >
            <path
              d="M195.526 87.01L197.584 80.4151L194.824 65.4011L188.978 55.5789L187.341 53.7548L189.866 46.318L191.41 41.2666L192.579 32.2864L191.877 26.1593L185.984 27.4689L182.009 29.4801L177.004 31.9123L155.582 20.6403L140.989 15.1679L130.652 12.4551L127.471 7.31021L123.075 1.55719L117.93 5.71991L113.112 11.7067L96.5555 18.9096L84.2075 27.8431L70.9245 39.6761L64.657 47.6274L63.7216 49.8257L61.5743 54.1368L67.4613 55.9227L80.8893 60.0237L86.7763 61.8096L89.9514 55.9226L145.117 69.5486L195.526 87.01Z"
              fill="white"
            />
            <path
              d="M122.766 0C122.766 0 119.519 2.63369 118.064 4.12839C116.115 6.13099 112.707 10.5761 112.707 10.5761C112.707 10.5761 106.674 12.7339 103.1 14.504C100.422 15.8305 97.295 17.4672 95.2278 18.6929C92.285 20.4379 89.313 22.5351 86.4785 24.63C84.4361 26.1395 82.4166 27.6926 80.5382 29.4018C80.4483 29.4836 80.3588 29.5654 80.269 29.6472C80.2207 29.6912 80.272 29.6433 80.2235 29.6876L81.6395 31.4044C81.6718 31.3752 81.6607 31.3851 81.6932 31.3563C83.82 29.4848 85.9887 27.7187 88.1502 26.1329C91.3947 23.7525 98.7182 19.1951 101.963 17.5489C107.537 14.7212 113.918 12.574 113.918 12.574C113.918 12.574 116.103 9.94306 117.217 8.64496C118.274 7.41256 119.292 6.14287 120.426 4.98117C121.1 4.29133 122.555 3.02365 122.555 3.02365C122.555 3.02365 123.383 3.93062 124.407 5.11295C125.154 5.97596 126.391 7.62025 126.885 8.33755C128.152 10.1766 129.901 13.6153 129.901 13.6153C129.901 13.6153 136.032 14.9131 139.036 15.7919C143.36 17.0567 147.651 18.4444 151.799 20.2386C154.389 21.3591 157.97 22.9329 160.971 24.455C166.436 27.2269 177.033 33.3961 177.033 33.3961L181.57 30.866C181.57 30.866 183.681 29.7667 184.801 29.3271C185.772 28.9456 187.252 28.3813 188.505 27.9907C189.308 27.7406 190.943 27.3473 190.943 27.3473C190.943 27.3473 191.287 29.2682 191.294 31.2639C191.299 32.8011 191.213 34.8529 191.006 36.6336C190.889 37.6492 190.674 38.6523 190.465 39.653C190.155 41.1348 189.831 42.6166 189.406 44.0698C188.434 47.4024 186.003 53.9131 186.003 53.9131L187.948 56.6855C187.948 56.6855 189.602 59.2404 190.348 60.5659C191.537 62.6781 192.685 64.8212 193.65 67.0446C194.392 68.7543 195.556 72.3016 195.556 72.3016C195.556 72.3016 196.129 74.8209 196.268 76.1024C196.461 77.8998 196.429 81.5233 196.429 81.5233L198.648 82.1052L198.677 81.4132C198.677 81.4132 198.729 78.2591 198.537 76.6988C198.228 74.1962 197.728 71.6976 196.92 69.3091C195.935 66.3981 194.497 63.6501 193.019 60.9561C192.311 59.6661 190.716 56.9606 189.459 55.0283C189.144 54.5438 188.463 53.6093 188.463 53.6093C188.463 53.6093 190.827 47.0764 191.707 43.721C192.332 41.3379 192.845 38.9165 193.147 36.4713C193.381 34.5813 193.468 32.7024 193.434 30.7652C193.399 28.8279 192.812 24.9619 192.812 24.9619C192.812 24.9619 191.437 25.099 189.815 25.427C188.347 25.7241 186.68 26.1921 185.573 26.5866C182.545 27.6654 177.056 30.8298 177.056 30.8298C177.056 30.8298 175.781 30.0751 173.987 29.019C171.293 27.4337 167.323 25.2549 164.841 23.9816C160.582 21.7975 156.341 19.6788 151.93 17.8972C147.832 16.2422 143.615 14.884 139.376 13.6349C136.76 12.8643 131.441 11.6443 131.441 11.6443C131.441 11.6443 130.266 9.54382 129.624 8.52722C128.93 7.42992 128.221 6.33752 127.425 5.31192C126.904 4.63975 126.319 3.83291 125.718 3.13321C124.782 2.04531 122.764 0.000610352 122.764 0.000610352L122.766 0Z"
              fill={bongoColorBody}
            />
            <path
              d="M144.956 51.1501C144.047 51.7017 143.528 52.9174 143.482 53.9798C143.447 54.7915 143.822 55.6864 144.418 56.2307C145.069 56.826 146.216 57.1159 146.932 57.0609C148.102 56.9711 148.758 56.5109 149.224 55.798C149.802 54.9134 149.863 53.3005 149.377 52.2044C148.887 51.0974 147.846 50.4863 146.878 50.4333C146.154 50.3937 145.437 50.7699 144.956 51.15H144.956L144.956 51.1501Z"
              fill={bongoColorBody}
            />
            <path
              d="M112.106 42.5611C112.291 42.1575 112.759 41.8374 113.202 41.8039C113.662 41.7691 114.157 42.05 114.445 42.4097C114.891 42.9659 114.52 43.766 115.169 44.2915C115.617 44.6549 116.69 44.6753 117.137 44.5996C117.457 44.5454 117.781 44.4927 118.089 44.3907C118.68 44.1953 119.159 44.007 119.791 43.6248C120.053 43.4663 120.409 43.2768 120.751 43.2606C121.069 43.2455 121.414 43.325 121.671 43.5126C121.9 43.6799 122.051 44.0296 122.133 44.2257C122.278 44.57 122.424 45.4409 122.716 45.9858C122.932 46.3891 123.133 46.7655 123.561 47.0672C124.432 47.6815 125.379 47.7291 126.489 47.4677C127.281 47.2815 127.525 47.0415 128.056 47.1102C128.451 47.1613 128.862 47.3558 129.115 47.6635C129.334 47.9315 129.44 48.3164 129.407 48.6615C129.375 49.0034 129.202 49.384 128.936 49.5779C128.001 50.2603 125.866 50.4896 124.314 50.3252C123.515 50.2405 122.727 49.909 122.067 49.45C121.417 48.9982 120.899 48.4487 120.49 47.6761L119.971 46.6968L118.843 47.0564C117.545 47.4701 116.66 47.455 115.572 47.3388C114.997 47.2774 114.412 47.1219 113.914 46.828C113.311 46.4721 112.769 45.9423 112.402 45.3698C111.894 44.5771 111.713 43.4166 112.106 42.5611L112.106 42.5611Z"
              fill={bongoColorBody}
            />
            <path
              d="M102.436 37.8321C101.651 38.5483 101.063 39.6683 101.158 40.7513C101.264 41.97 101.631 42.4556 102.272 42.9875C102.913 43.5191 103.958 43.7255 104.674 43.6705C105.844 43.5807 106.521 43.0133 106.926 42.2169C107.519 41.0512 107.478 39.4403 106.704 38.2997C106.242 37.6201 105.613 37.1483 104.646 37.0953C103.922 37.0557 103.009 37.3085 102.436 37.832L102.436 37.8321Z"
              fill={bongoColorBody}
            />
            <path
              d="M154.466 72.3741L153.624 57.0331L155.822 50.9527L160.78 47.398L167.843 48.0061L172.614 52.7768L177.525 58.9041L156.805 72.749L154.466 72.3741Z"
              fill="white"
            />
            <g className="pawLeftUp active" ref={pawLeftUp}>
              <path
                className="paw__left--up active"
                d="M153.406 71.2461C153.227 70.0137 153.001 67.2084 152.894 65.7901C152.774 64.1956 152.638 62.6786 152.66 61.1202C152.683 59.4236 152.766 57.7171 153.058 56.0456C153.246 54.9646 153.502 53.8825 153.926 52.8702C154.446 51.6255 155.056 50.373 155.957 49.3688C156.896 48.3226 158.08 47.4631 159.355 46.8718C160.753 46.2234 162.311 45.7922 163.853 45.7969C165.088 45.8009 166.311 46.2041 167.451 46.6801C168.126 46.9621 168.722 47.4088 169.322 47.8285C169.978 48.288 170.618 48.7763 171.203 49.3233C172.545 50.5772 173.766 51.9614 174.913 53.3957C175.964 54.7104 177.573 57.1128 177.804 57.5347C178.02 57.9277 177.99 58.5773 177.499 58.9093C176.96 59.2744 176.36 59.1467 176.063 58.8286C175.518 58.2442 173.443 54.9886 171.87 53.2896C170.466 51.7737 169.023 50.2056 167.229 49.1807C166.289 48.6438 165.22 48.2451 164.139 48.1796C162.93 48.1062 161.701 48.3813 160.571 48.8741C158.548 49.7563 157.56 50.8603 156.635 52.3451C155.537 54.1083 155.173 56.2842 154.997 58.3575C154.94 59.0365 154.909 60.1813 154.896 61.5375C154.887 62.4034 154.911 63.2699 154.96 64.1344C155.028 65.3161 155.276 67.671 155.276 67.671C155.42 69.2868 155.637 70.2932 155.565 71.198C155.532 71.6091 155.044 72.0586 154.609 72.0889C154.121 72.123 153.477 71.7375 153.406 71.246L153.406 71.2461Z"
                fill={bongoColorBody}
              />
              <path
                className="paw__left--pawPads active"
                d="M158.466 57.3301C158.122 57.3516 157.785 57.5559 157.547 57.8059C157.291 58.0753 157.147 58.4543 157.085 58.8209C157.024 59.1878 157.044 59.5897 157.19 59.9321C157.332 60.2665 157.578 60.5925 157.901 60.7585C158.235 60.93 158.665 60.9721 159.023 60.8579C159.435 60.7264 159.801 60.3949 160.01 60.0163C160.218 59.6373 160.276 59.1561 160.194 58.7314C160.122 58.3634 159.917 57.9999 159.63 57.7587C159.313 57.4928 158.879 57.3044 158.466 57.3302L158.466 57.3301Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__left--pawPads active"
                d="M161.466 59.2591C161.109 59.9809 161.07 60.8549 161.157 61.6556C161.245 62.467 161.487 63.3125 161.984 63.96C162.431 64.5419 163.067 65.1102 163.793 65.214C164.484 65.3128 165.242 64.9954 165.781 64.5501C166.291 64.1275 166.616 63.464 166.752 62.8153C166.948 61.8811 166.878 60.83 166.474 59.9654C166.137 59.2448 165.507 58.6286 164.8 58.2645C164.27 57.9918 163.61 57.8296 163.035 57.9843C162.384 58.1591 161.756 58.6508 161.466 59.2593V59.2593L161.466 59.2591Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__left--pawPads active"
                d="M165.486 55.0711C165.53 54.6659 165.928 54.3336 166.293 54.1525C166.939 53.8318 167.865 53.8946 168.453 53.9991C168.997 54.096 169.462 54.2805 169.847 54.6112C170.11 54.8373 170.396 55.1435 170.405 55.4906C170.413 55.7908 170.198 56.0891 169.962 56.2752C169.395 56.7233 168.601 56.8857 167.878 56.8741C167.284 56.8641 166.641 56.7044 166.182 56.327C165.812 56.0229 165.435 55.5469 165.486 55.0711L165.486 55.0711Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__left--pawPads active"
                d="M163.196 54.2471C163.4 53.7678 163.345 53.1362 163.077 52.6893C162.777 52.1867 162.182 51.7593 161.597 51.7431C161.14 51.7305 160.631 52.0202 160.403 52.416C160.072 52.9919 160.104 53.8296 160.429 54.4094C160.71 54.911 161.315 55.3662 161.888 55.3292C162.453 55.2928 162.975 54.7679 163.196 54.247L163.196 54.2471Z"
                fill={bongoColorPaw}
              />
              <path
                d="M62.277 48.5201L61.669 42.9074L61.248 38.6979L61.8561 33.4126L63.5399 29.2499L66.8607 26.8645L71.117 25.6016L74.7185 25.8822L77.9458 28.3144L84.8213 37.2011L65.2703 49.8291L62.277 48.5201Z"
                fill="white"
              />
            </g>
            <g className="pawRightUp active" ref={pawRightUp}>
              <path
                className="paw__right--pawPads"
                d="M69.5129 37.3891C69.0358 37.9031 68.8863 38.6774 68.8196 39.3755C68.7563 40.0377 68.8939 40.7204 69.1084 41.35C69.2772 41.8458 69.5603 42.3035 69.8773 42.7204C70.1094 43.0257 70.3629 43.3369 70.6937 43.5311C71.0537 43.7425 71.4818 43.9148 71.8976 43.877C72.5207 43.8204 73.1255 43.4736 73.5788 43.0423C74.002 42.6396 74.2993 42.0814 74.4352 41.5133C74.6239 40.7244 74.5725 39.8576 74.3353 39.0819C74.1284 38.4051 73.7789 37.7104 73.2213 37.2745C72.6737 36.8463 71.9288 36.6056 71.2346 36.6408C70.6096 36.6725 69.9387 36.9306 69.5129 37.3892L69.5129 37.3891Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__right--pawPads"
                d="M65.5009 36.1651C65.0776 36.4479 64.8708 37.0292 64.8292 37.5366C64.7842 38.0842 64.9051 38.7366 65.3032 39.1153C65.6456 39.4411 66.2197 39.5633 66.6799 39.4551C67.1349 39.3482 67.5448 38.9729 67.7491 38.5477C67.9441 38.1418 67.976 37.5111 67.8401 37.1086C67.6916 36.6687 67.3342 36.2519 66.904 36.0772C66.4698 35.901 65.8906 35.9048 65.5009 36.1651Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__right--pawPads"
                d="M68.0248 31.2131C67.8974 31.744 67.9285 32.3985 68.1808 32.9138C68.4097 33.3812 68.8585 33.8538 69.3747 33.9199C69.8475 33.9805 70.3804 33.686 70.6651 33.3037C70.9946 32.8615 71.0601 32.2027 70.9209 31.6691C70.7918 31.1742 70.4518 30.6693 69.9736 30.4622C69.5976 30.2994 69.0133 30.2816 68.5896 30.4707C68.2938 30.651 68.0976 30.9101 68.0249 31.2132L68.0248 31.2131Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__right--pawPads"
                d="M73.5938 33.0971C74.0823 32.5953 74.9295 32.5389 75.6288 32.5756C76.3599 32.6139 77.143 32.8511 77.6876 33.3404C77.9026 33.5336 78.0795 33.8273 78.0746 34.1163C78.0701 34.3803 77.8965 34.6394 77.6974 34.8127C77.2963 35.1617 76.7049 35.3321 76.2035 35.3713C75.5602 35.4215 74.8699 35.3417 74.2911 35.0544C73.9046 34.8626 73.4758 34.5781 73.3504 34.1653C73.2443 33.8158 73.3391 33.3588 73.5938 33.0971L73.5938 33.0971Z"
                fill={bongoColorPaw}
              />
              <path
                className="paw__right--up"
                d="M60.8329 46.7349C60.8329 46.7349 60.0568 39.6992 60.3147 36.1889C60.4369 34.5269 60.6743 32.8346 61.2874 31.285C61.7884 30.0191 62.5184 28.8132 63.4493 27.8198C64.5015 26.6969 65.7925 25.7507 67.1993 25.1271C68.5574 24.525 70.0712 24.1596 71.5564 24.1903C72.7664 24.2153 73.9579 24.6256 75.0715 25.0996C76.032 25.5085 76.9144 26.1001 77.7383 26.7411C78.8159 27.5795 79.7586 28.5839 80.6769 29.5942C81.6541 30.6692 82.5321 31.832 83.4016 32.9959C83.9375 33.7133 84.3801 34.2957 84.9356 35.2011C85.1517 35.5532 85.6019 36.1034 85.4843 36.7158C85.4049 37.1293 84.8546 37.5299 84.4062 37.5204C83.8543 37.5087 83.4506 36.9553 83.122 36.4746C81.866 34.6368 80.6702 32.9167 79.2242 31.3201C78.1119 30.0919 76.9684 28.8409 75.5747 27.9447C74.5594 27.2918 73.4331 26.6877 72.2343 26.5461C70.9055 26.3891 69.5137 26.6915 68.2724 27.1909C67.0959 27.6641 66.0295 28.4463 65.1402 29.3503C64.453 30.0488 63.9228 30.9083 63.5114 31.7977C63.184 32.5055 63.0087 33.2799 62.8665 34.0467C62.6127 35.4155 62.5105 36.815 62.5016 38.207C62.4853 40.7768 63.0772 45.895 63.0772 45.895C63.0772 45.895 63.292 47.6742 63.2496 48.1118C63.2119 48.5005 63.0683 49.043 62.394 49.1377C61.7328 49.2305 61.4322 48.8634 61.1783 48.5265C60.9453 48.2174 60.8328 46.7345 60.8328 46.7345L60.8329 46.7349Z"
                fill={bongoColorBody}
              />
            </g>
          </g>
          <g>
            <path
              // ref={containerRef}
              className="table"
              d="M0.0057373 34.87L0.0107117 126.294H270.391L270.39 102.153L0.0057373 34.87Z"
              fill="white"
            />
            <path
              className="table--border"
              d="M270.92 99.9535L0.545166 32.6719L-2.63944e-05 34.8628L270.374 102.144L270.92 99.9535Z"
              fill={bongoColorBody}
            />
          </g>
          <g clipPath="url(#clip1_679_2795)">
            <g className="pawLeftDown" ref={pawLeftDown}>
              <path
                className={`paw__left--down `}
                d="M181.662 75.79L150.342 64.551L148.546 66.5694L145.172 71.1335L144.312 75.4991L145.239 79.071L148.149 81.2538L154.102 81.4522L159.658 81.1215L166.008 79.3356L171.498 77.7481L175.599 76.9543L181.662 75.79Z"
                fill="white"
              />
              <path
                className={`paw__left--down--border `}
                d="M149.132 64.331C149.579 64.009 150.224 64.1091 150.548 64.4544C150.898 64.826 150.943 65.6314 150.586 65.9838C149.992 66.5705 149.119 67.395 148.476 68.1806C147.656 69.1812 146.822 70.2016 146.261 71.367C145.756 72.416 145.335 73.5517 145.262 74.7137C145.196 75.784 145.271 76.9494 145.792 77.8869C146.324 78.8455 147.132 79.7178 148.26 80.0615C150.539 80.7558 152.042 80.6538 154.623 80.5402C155.295 80.5106 157.662 80.1852 159.169 79.9249C161.092 79.5927 163.014 79.1915 164.899 78.7181C166.784 78.2447 168.779 77.6242 170.406 77.0263C172.034 76.4284 172.661 76.2369 173.818 75.9483C174.907 75.6768 176.011 75.4439 177.128 75.3368C178.113 75.2424 179.114 75.2428 180.095 75.3116C182.036 75.4477 182.143 76.0573 182.139 76.3109C182.135 76.5829 182.442 77.8252 180.165 77.7073C177.323 77.5602 176.394 77.5539 174.518 78.0622C172.141 78.7066 169.366 79.8628 166.732 80.567C164.42 81.185 162.073 81.6773 159.713 82.072C157.588 82.4276 155.45 82.8169 153.295 82.8475C151.529 82.8726 149.723 82.8686 148.019 82.3618C146.661 81.9582 145.39 81.0982 144.472 80.0192C143.769 79.1927 143.385 78.1065 143.136 77.0503C142.928 76.1678 142.906 75.2527 143.026 74.3322C143.243 72.6734 143.836 71.0415 144.665 69.5884C145.805 67.5909 148.009 65.1281 149.133 64.331L149.132 64.331Z"
                fill={bongoColorBody}
              />
            </g>
            <g className="pawRightDown" ref={pawRightDown}>
              <path
                className="paw__right--down"
                d="M81.6662 31.4044L92.4933 55.5915L91.13 56.9846L83.4901 60.0273L73.1053 62.64L65.5316 61.714L62.092 57.7122L61.8605 52.9827L63.6133 48.9478L67.0529 44.8468L80.7782 30.5262L81.6662 31.4044Z"
                fill="white"
              />
              <path
                className="paw__right--down--border"
                d="M80.2502 29.6876C80.2069 29.7309 78.6831 31.1252 78.579 31.2213C73.7513 35.6789 69.0506 40.3111 64.971 45.4504C64.0077 46.664 63.1298 47.9644 62.4595 49.3613C61.8591 50.6128 61.451 51.9578 61.1345 53.3094C60.9599 54.0553 60.8031 54.8564 60.8224 55.5862C60.8614 56.7424 60.9065 57.7684 61.3263 58.7504C61.8257 59.9189 62.6132 61.0274 63.6331 61.7854C64.9365 62.7541 66.5961 63.218 68.1972 63.4897C70.6262 63.9017 73.1584 63.748 75.5869 63.3326C79.9819 62.5808 88.2947 59.1555 88.2947 59.1555C88.2947 59.1555 91.5304 57.7131 92.4091 57.2497C92.7015 57.0956 92.8974 56.7162 92.8954 56.3857C92.8924 55.9693 92.6312 55.5096 92.2681 55.3057C91.9398 55.1213 91.4791 55.1682 91.1389 55.3295C89.0083 56.339 86.962 57.3422 84.7967 58.1624C81.8514 59.2779 79.1162 60.2791 75.7817 60.9911C72.0484 61.7883 68.5705 61.7785 65.5002 60.2351C64.514 59.7394 63.7183 59.0446 63.3355 57.7293C62.7844 55.8358 63.2487 52.501 64.4754 50.2957C65.0886 49.1934 66.6329 46.9486 66.6329 46.9486C68.7167 44.5066 71.9623 40.8769 74.0893 38.6716C75.9981 36.6924 78.0055 34.7261 80.0657 32.8425C80.2483 32.6755 81.5086 31.5462 81.692 31.3806L80.2502 29.6876Z"
                fill={bongoColorBody}
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_679_2795">
          <rect width="270" height="126" fill="white" />
        </clipPath>
        <clipPath id="clip1_679_2795">
          <rect width="270.92" height="126.3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
export default BongoCat;
