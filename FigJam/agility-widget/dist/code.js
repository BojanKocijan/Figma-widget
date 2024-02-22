(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Widget",
      effect: {
        type: "drop-shadow",
        color: "#3B485C29",
        offset: {
          x: 0,
          y: 8
        },
        blur: 16
      },
      fill: "#FFF",
      stroke: "#C1C6CD",
      cornerRadius: 8,
      width: 346,
      height: 280
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Import",
      x: {
        type: "left-right",
        leftOffset: 24,
        rightOffset: 24
      },
      y: 178,
      fill: "#FFF",
      stroke: "#A4ACB6",
      cornerRadius: 4,
      overflow: "visible",
      spacing: 10,
      padding: {
        vertical: 12,
        horizontal: 16
      },
      width: 298,
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      onClick: () => __async(this, null, function* () {
        yield new Promise((resolve) => {
          figma.showUI(__html__);
          figma.ui.on("message", (msg) => {
            if (msg === "Agility work item imported") {
              figma.notify("Agility work item imported");
            }
            if (msg === "close") {
              figma.closePlugin();
            }
          });
        });
      })
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Label",
      fill: "#3B485C",
      paragraphSpacing: 4,
      horizontalAlignText: "center",
      lineHeight: 16,
      fontFamily: "Lato",
      fontSize: 14,
      letterSpacing: 0.42
    }, "Import a story or a defect")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Button sticky to work item",
      x: {
        type: "left-right",
        leftOffset: 24,
        rightOffset: 24
      },
      y: 114,
      fill: "#FFF",
      stroke: "#A4ACB6",
      cornerRadius: 4,
      overflow: "visible",
      spacing: 10,
      padding: {
        vertical: 12,
        horizontal: 16
      },
      width: 298,
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      onClick: () => __async(this, null, function* () {
        yield new Promise((resolve) => {
          figma.showUI(__html__);
          figma.ui.on("message", (msg) => {
            if (msg === "Agility work item imported") {
              figma.notify("Agility work item imported");
            }
            if (msg === "close") {
              figma.closePlugin();
            }
          });
        });
      })
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Turn stickies into the work item",
      fill: "#3B485C",
      paragraphSpacing: 4,
      horizontalAlignText: "center",
      lineHeight: 16,
      fontFamily: "Lato",
      fontSize: 14,
      letterSpacing: 0.42
    }, "Turn stickies into the work item")), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Header",
      x: {
        type: "left-right",
        leftOffset: 0,
        rightOffset: 0
      },
      fill: "#33D389",
      width: 346,
      height: 64
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Logo",
      x: 69,
      y: 20,
      height: 24,
      width: 208,
      src: "<svg width='208' height='24' viewBox='0 0 208 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M96.774 5.49446H97.2643V6.94907H97.5487L97.5511 5.49669H98.0413V5.22856L96.774 5.22633V5.49446ZM98.7166 5.22856H98.2702V6.9446H98.5408L98.5431 5.56373H98.5477L99.0264 6.94684H99.2253L99.7132 5.56596H99.7179L99.7156 6.94684H99.9977L100 5.22856H99.5514L99.1374 6.45079H99.1305L98.7166 5.22856ZM87.0939 6.34578C87.1933 5.64863 87.7668 5.16376 88.5299 5.16376C89.4249 5.16376 90.003 5.71567 89.9984 6.57145L89.9868 16.8722C89.9868 17.7525 89.4203 18.2977 88.5114 18.2977C87.709 18.2955 87.1332 17.7771 87.0684 17.0174C86.2012 17.8129 84.6889 18.5681 83.0909 18.5659C81.2316 18.5636 79.5851 17.938 78.3479 16.8856C78.4913 16.4901 78.5723 16.0655 78.5723 15.6231C78.5746 13.9808 77.5154 12.5731 76.0215 12.0056C76.0169 11.914 76.0146 11.8224 76.0146 11.7285C76.0192 7.87189 79.1365 4.85541 83.1094 4.85988C84.7235 4.85988 86.1295 5.38721 87.0939 6.34578ZM79.1319 11.724C79.1273 13.8311 80.8986 15.5449 83.0747 15.5471C85.2531 15.5494 87.0268 13.8378 87.0291 11.733C87.0314 9.62592 85.26 7.91211 83.084 7.90988C80.9079 7.90764 79.1342 9.61921 79.1319 11.724ZM61.1544 6.31896C61.2538 5.62182 61.8274 5.13695 62.5905 5.13695C63.4854 5.13695 64.0636 5.68885 64.0636 6.54464L64.052 16.8454C64.052 17.7257 63.4854 18.2709 62.5766 18.2709C61.7742 18.2687 61.1983 17.7503 61.1336 16.9906C60.2664 17.786 58.7563 18.5413 57.1561 18.539C53.1161 18.5346 50.0728 15.5963 50.0775 11.7017C50.0821 7.84508 53.197 4.8286 57.1699 4.83307C58.7841 4.83307 60.1901 5.36039 61.1544 6.31896ZM53.0907 11.695C53.0884 13.8021 54.8597 15.5159 57.0358 15.5181C59.2142 15.5203 60.9879 13.8088 60.9879 11.7039C60.9902 9.59687 59.2211 7.88306 57.0428 7.88083C54.8667 7.87859 53.093 9.59017 53.0907 11.695ZM11.0446 1.40099C11.0446 0.549669 11.6227 0 12.5199 0C13.4033 0.00223443 13.9953 0.56531 13.9953 1.40545L13.9768 16.9481C13.9745 17.681 13.4542 18.2128 12.7373 18.2128C11.8701 18.2128 11.3128 17.7235 11.1509 16.8297C10.3207 17.652 8.75287 18.4854 7.07861 18.4832C3.30459 18.4787 -0.00462018 15.2835 4.84224e-06 11.6458C0.00462987 7.98138 3.31846 4.77274 7.09479 4.77497C8.72512 4.77721 10.1149 5.309 11.0399 6.28098L11.0446 1.40099ZM3.10802 11.6414C3.10571 13.7484 4.87709 15.4622 7.05317 15.4645C9.22924 15.4667 11.0029 13.7551 11.0053 11.6503C11.0076 9.54324 9.23618 7.82944 7.06011 7.8272C4.88403 7.82497 3.11033 9.53654 3.10802 11.6414ZM32.4191 6.47984C32.5417 5.53021 33.0273 5.10567 33.9708 5.10567C34.7016 5.10567 35.2311 5.62852 35.2265 6.34801L35.2149 17.1783C35.2126 20.3288 33.3534 24.0067 28.1225 24C27.1258 23.9978 26.5546 23.4794 26.5546 22.5722C26.5569 21.7075 27.1373 21.1489 28.0323 21.1489C30.7772 21.1511 32.1578 19.8104 32.2411 17.0487C31.3762 18.005 30.028 18.5078 28.3213 18.5055C24.545 18.5011 21.2381 15.2969 21.2427 11.6458C21.2451 7.99702 24.5612 4.79732 28.3352 4.80179C29.991 4.80179 31.5404 5.62182 32.4191 6.47984ZM24.3161 11.6637C24.3138 13.7708 26.0828 15.4846 28.2612 15.4868C30.4373 15.4891 32.211 13.7797 32.2133 11.6727C32.2156 9.56559 30.4442 7.85178 28.2682 7.84954C26.0921 7.84731 24.3184 9.55888 24.3161 11.6637ZM92.5838 6.47314C92.5838 5.67321 93.2082 5.07215 94.036 5.07215C94.9171 5.07215 95.5091 5.63746 95.5114 6.47761L95.4628 16.9258C95.4605 17.8039 94.894 18.3491 93.9852 18.3491C93.1295 18.3469 92.5352 17.7615 92.5352 16.9213L92.5838 6.47314ZM16.331 6.33237C16.331 5.53244 16.9553 4.93138 17.7832 4.93138C18.6643 4.93138 19.2563 5.49669 19.2563 6.3346L19.2447 16.794C19.2447 17.6743 18.6782 18.2195 17.7694 18.2195C16.9137 18.2195 16.3194 17.6319 16.3194 16.7917L16.331 6.33237ZM37.8281 6.39046C37.8281 5.59054 38.4525 4.98948 39.2803 4.98948C40.1614 4.98948 40.7534 5.55479 40.7534 6.3927L40.7419 16.8163C40.7419 17.6967 40.1753 18.2419 39.2665 18.2419C38.4108 18.2419 37.8165 17.6542 37.8165 16.8141L37.8281 6.39046ZM46.7798 14.0881C46.7775 15.1517 47.3718 15.4131 48.3315 15.4913C49.1131 15.565 49.5595 16.0924 49.5595 16.9414C49.5595 17.7615 48.9258 18.253 47.869 18.2508C45.3137 18.2463 43.8522 16.7359 43.8545 14.1059L43.8614 8.04618C43.1746 7.92105 42.7214 7.37138 42.7214 6.65636C42.7214 5.89666 43.1561 5.36933 43.8638 5.26655L43.8684 1.46132C43.8684 0.623405 44.4673 0.0379853 45.3206 0.0379853C46.2294 0.0402197 46.7937 0.58542 46.7937 1.46578L46.7891 5.23526H47.5499C48.4333 5.2375 48.9998 5.79611 48.9998 6.66306C48.9998 7.4764 48.3893 8.06405 47.5476 8.06405H46.7868L46.7798 14.0881ZM66.8686 1.46132C66.8686 0.636812 67.4676 0.0603294 68.3209 0.0603294C69.2297 0.0625639 69.794 0.598827 69.7963 1.46355L69.7778 16.8454C69.7755 17.7257 69.2089 18.2709 68.3001 18.2709C67.4444 18.2709 66.8501 17.6833 66.8501 16.8431L66.8686 1.46132ZM76.6876 13.9205C76.7454 13.9853 76.7986 14.0546 76.8471 14.1261C76.9466 14.2668 77.0321 14.4188 77.0992 14.5819C77.2379 14.9036 77.3143 15.2544 77.3143 15.6231C77.3143 15.9918 77.2356 16.3426 77.0969 16.6621C77.0275 16.823 76.9419 16.9727 76.8425 17.1157C76.7939 17.1872 76.7407 17.2565 76.6829 17.3213C76.5696 17.4531 76.4447 17.5738 76.3083 17.6833C75.8319 18.0631 75.2191 18.291 74.5508 18.291C74.0744 18.291 73.6258 18.1726 73.235 17.967C73.1587 17.9268 73.0823 17.8821 73.0083 17.833C72.273 17.3526 71.792 16.5392 71.792 15.6164C71.7943 14.6936 72.2776 13.8825 73.013 13.4021C73.087 13.3529 73.1633 13.3083 73.2419 13.268C73.6327 13.0625 74.0814 12.9463 74.5577 12.9463C74.715 12.9463 74.8699 12.9597 75.0202 12.9843C75.3972 13.0468 75.7464 13.1831 76.0539 13.3775C76.1164 13.4155 76.1765 13.458 76.2343 13.5004C76.4008 13.6255 76.5534 13.7641 76.6876 13.9205ZM59.735 11.6927C59.735 11.4894 59.7095 11.2928 59.6633 11.1029C59.617 10.9129 59.55 10.7319 59.4667 10.5599C59.1823 9.99458 58.6966 9.53876 58.0931 9.29297C57.7716 9.16114 57.4178 9.0874 57.0455 9.0874C56.6732 9.0874 56.3194 9.16114 55.9979 9.29297C55.1909 9.62143 54.585 10.3208 54.4069 11.1677C54.3699 11.3375 54.3514 11.514 54.3514 11.6927C54.3514 13.1295 55.5563 14.2959 57.0432 14.2959C58.0653 14.2959 58.9556 13.744 59.4112 12.9329C59.5153 12.7496 59.5962 12.5508 59.6517 12.343C59.6795 12.2379 59.7003 12.1329 59.7141 12.0234C59.728 11.9162 59.735 11.8045 59.735 11.6927ZM4.36646 11.6905C4.36646 10.2538 5.57128 9.0874 7.05823 9.0874C8.54517 9.0874 9.7523 10.2538 9.7523 11.6905C9.7523 13.1272 8.54517 14.2936 7.05823 14.2936C5.57128 14.2936 4.36646 13.1272 4.36646 11.6905ZM83.8799 9.20583C83.9655 9.23041 84.0464 9.25945 84.1273 9.29297C84.9344 9.62143 85.538 10.3208 85.7137 11.1654C85.7507 11.3352 85.7692 11.5118 85.7692 11.6905C85.7692 12.41 85.4686 13.0602 84.9807 13.5317C84.8604 13.6501 84.7263 13.7551 84.5829 13.849C84.3679 13.9897 84.1297 14.1015 83.8776 14.1774C83.7504 14.2154 83.6209 14.2445 83.4868 14.2646C83.355 14.2847 83.2162 14.2936 83.0775 14.2936C82.8 14.2936 82.5317 14.2534 82.2773 14.1774C82.023 14.1015 81.7871 13.9897 81.572 13.849C81.431 13.7574 81.2968 13.6501 81.1743 13.5317C80.6863 13.0602 80.3857 12.41 80.3857 11.6905C80.3857 11.5095 80.4065 11.3352 80.4412 11.1654C80.6216 10.3186 81.2275 9.6192 82.0322 9.29074C82.1132 9.25945 82.1964 9.22817 82.2796 9.20359C82.5317 9.12762 82.8023 9.0874 83.0798 9.0874C83.2185 9.0874 83.355 9.09857 83.4891 9.11868C83.6232 9.13879 83.7527 9.16784 83.8799 9.20583ZM28.264 9.0874C28.6363 9.0874 28.9901 9.16114 29.3115 9.29297C30.1186 9.62143 30.7245 10.3208 30.9002 11.1677C30.9372 11.3375 30.9557 11.514 30.9557 11.6927C30.9557 13.1295 29.7486 14.2959 28.2617 14.2959C26.7747 14.2959 25.5699 13.1317 25.5699 11.6927C25.5699 11.5118 25.5907 11.3375 25.6254 11.1677C25.8058 10.3208 26.4116 9.62143 27.2164 9.29297C27.5378 9.16114 27.8917 9.0874 28.264 9.0874ZM136 12C136 18.6274 130.627 24 124 24C117.373 24 112 18.6274 112 12C112 5.37258 117.373 0 124 0C130.627 0 136 5.37258 136 12ZM130.685 5.43514H131.505C131.6 5.44437 131.689 5.48711 131.756 5.55577C131.823 5.62443 131.863 5.71456 131.87 5.81014V10.5701C131.863 10.666 131.822 10.7561 131.754 10.824C131.686 10.892 131.596 10.9332 131.5 10.9401H127.22C127.124 10.9332 127.034 10.892 126.966 10.824C126.898 10.7561 126.857 10.666 126.85 10.5701V9.83014C126.857 9.73431 126.898 9.64419 126.966 9.57625C127.034 9.50831 127.124 9.46709 127.22 9.46014H129.46C129.004 8.45787 128.286 7.59703 127.382 6.96811C126.478 6.33919 125.421 5.96541 124.323 5.88607C123.224 5.80673 122.125 6.02475 121.14 6.51722C120.155 7.00968 119.321 7.75841 118.725 8.6847C118.129 9.61098 117.794 10.6806 117.755 11.7812C117.716 12.8817 117.973 13.9726 118.501 14.939C119.029 15.9055 119.808 16.7118 120.755 17.2734C121.703 17.8349 122.784 18.1309 123.885 18.1301C125.397 18.1581 126.861 17.6031 127.975 16.5801C128.045 16.5206 128.133 16.4879 128.225 16.4879C128.317 16.4879 128.405 16.5206 128.475 16.5801L129.095 17.2001C129.138 17.2327 129.174 17.275 129.198 17.3236C129.222 17.3722 129.235 17.4258 129.235 17.4801C129.235 17.5345 129.222 17.5881 129.198 17.6367C129.174 17.6853 129.138 17.7275 129.095 17.7601C128.162 18.5973 127.04 19.1954 125.825 19.5031C124.61 19.8108 123.339 19.8189 122.12 19.5266C120.901 19.2344 119.772 18.6506 118.829 17.8253C117.885 17.0001 117.157 15.9582 116.705 14.7891C116.253 13.62 116.092 12.3587 116.236 11.1137C116.379 9.86862 116.823 8.67705 117.529 7.64137C118.235 6.6057 119.181 5.75689 120.288 5.16792C121.394 4.57895 122.627 4.26743 123.88 4.26014C125.155 4.25476 126.412 4.56795 127.536 5.17129C128.66 5.77463 129.615 6.64903 130.315 7.71514V5.81014C130.322 5.71378 130.363 5.62302 130.431 5.55426C130.499 5.4855 130.589 5.44325 130.685 5.43514ZM124.358 8.02269C124.312 8.06882 124.25 8.09631 124.185 8.09991C123.646 8.07087 123.108 8.15762 122.605 8.35432C122.103 8.55102 121.649 8.85309 121.273 9.24019C120.897 9.62729 120.609 10.0904 120.427 10.5984C120.246 11.1063 120.175 11.6473 120.22 12.1849C120.271 12.7978 120.461 13.3912 120.775 13.9199C121.044 14.398 121.418 14.8082 121.869 15.1194C122.321 15.4305 122.838 15.6342 123.38 15.7149C123.446 15.7315 123.503 15.7732 123.538 15.8312C123.574 15.8891 123.585 15.9587 123.57 16.0249C123.55 16.2049 123.445 16.7049 123.445 16.7049C123.4 16.8949 123.275 16.9549 123.135 16.9549C121.886 16.7488 120.758 16.0859 119.97 15.0949C119.344 14.3221 118.955 13.384 118.852 12.3946C118.749 11.4052 118.935 10.4071 119.388 9.52159C119.842 8.63612 120.543 7.90138 121.406 7.40667C122.269 6.91196 123.257 6.67859 124.25 6.73491C124.375 6.73991 124.51 6.84991 124.51 7.04991C124.51 7.24991 124.435 7.84991 124.435 7.84991C124.431 7.91504 124.404 7.97656 124.358 8.02269ZM126.915 13.7351C126.94 13.7083 126.959 13.6762 126.969 13.6412C126.98 13.6061 126.983 13.5691 126.977 13.5328C126.971 13.4966 126.957 13.4622 126.936 13.4323C126.915 13.4023 126.887 13.3776 126.855 13.3601L126.42 13.0501C126.361 13.0142 126.291 13.001 126.223 13.013C126.155 13.0249 126.093 13.0612 126.05 13.1151C125.848 13.3549 125.596 13.5477 125.312 13.6799C125.028 13.8122 124.718 13.8807 124.405 13.8807C124.092 13.8807 123.782 13.8122 123.498 13.6799C123.214 13.5477 122.962 13.3549 122.76 13.1151C122.692 13.0369 122.63 12.9533 122.575 12.8651C122.39 12.5663 122.287 12.2242 122.277 11.8731C122.266 11.522 122.348 11.1744 122.515 10.8651C122.547 10.8153 122.558 10.7548 122.546 10.6967C122.534 10.6386 122.499 10.5877 122.45 10.5551L121.95 10.1851C121.884 10.1572 121.809 10.1546 121.741 10.1776C121.673 10.2006 121.616 10.2477 121.58 10.3101C121.357 10.7197 121.23 11.175 121.209 11.6412C121.188 12.1074 121.274 12.5721 121.46 13.0001C121.619 13.4069 121.875 13.769 122.205 14.0551C122.785 14.619 123.566 14.9301 124.375 14.9201C124.862 14.9347 125.345 14.8352 125.786 14.6294C126.227 14.4236 126.614 14.1173 126.915 13.7351ZM205.01 7.62508H204.545V7.35508H205.78V7.62508H205.28V9.10008H205.01V7.62508ZM207.27 7.35508L206.855 8.58508L206.46 7.35508H206.02V9.10008H206.29V7.70008L206.755 9.10008H206.95L207.42 7.70008V9.10008H207.69V7.35508H207.27ZM143.095 8.10987C144.38 7.49927 145.788 7.19138 147.21 7.20987C148.835 7.20987 150.03 7.65487 150.83 8.44987C151.63 9.24487 152.005 10.4249 152.005 11.8749V18.4499H149.57V17.0649C149.144 17.5883 148.603 18.0064 147.989 18.2865C147.375 18.5666 146.705 18.7012 146.03 18.6799C143.99 18.6799 142.16 17.4849 142.16 15.2549V15.2149C142.16 12.8199 144 11.6399 146.66 11.6399C147.654 11.6299 148.643 11.7871 149.585 12.1049V11.8299C149.585 10.2549 148.635 9.41487 146.885 9.41487C145.81 9.41967 144.749 9.65676 143.775 10.1099L143.095 8.10987ZM146.715 16.8299C148.365 16.8299 149.62 15.8649 149.62 14.4599V13.6999C148.831 13.4024 147.993 13.2532 147.15 13.2599C145.54 13.2599 144.595 13.9549 144.595 15.1099V15.1499C144.595 16.2249 145.52 16.8299 146.715 16.8299ZM162.755 9.00006C162.315 8.4053 161.741 7.9237 161.078 7.59506C160.416 7.26641 159.684 7.10016 158.945 7.11006C156.41 7.11006 154 9.04006 154 12.3201V12.3651C154 15.6201 156.37 17.5551 158.945 17.5551C159.699 17.5635 160.443 17.3852 161.111 17.0363C161.78 16.6873 162.351 16.1785 162.775 15.5551V16.3951C162.775 18.6251 161.56 19.7801 159.335 19.7801C157.96 19.7836 156.613 19.3819 155.465 18.6251L154.54 20.5351C156.006 21.4188 157.688 21.8776 159.4 21.8601C161.355 21.8601 162.9 21.3601 163.87 20.3601C164.775 19.4351 165.25 18.0451 165.25 16.1751V7.35506H162.75L162.755 9.00006ZM162.795 12.3401C162.795 12.7542 162.712 13.1641 162.549 13.545C162.387 13.926 162.149 14.2701 161.85 14.5565C161.551 14.843 161.197 15.0658 160.809 15.2117C160.422 15.3575 160.009 15.4233 159.595 15.4051C159.189 15.4173 158.785 15.3471 158.408 15.1986C158.03 15.0502 157.686 14.8267 157.397 14.5415C157.108 14.2564 156.88 13.9156 156.727 13.5398C156.574 13.1639 156.498 12.7609 156.505 12.3551V12.3151C156.493 11.9091 156.566 11.5052 156.718 11.1286C156.87 10.7521 157.098 10.4111 157.389 10.127C157.679 9.8429 158.025 9.6219 158.404 9.47787C158.784 9.33384 159.189 9.2699 159.595 9.29006C160.005 9.26978 160.416 9.33291 160.801 9.47564C161.186 9.61836 161.539 9.83772 161.837 10.1205C162.135 10.4032 162.373 10.7434 162.536 11.1206C162.699 11.4978 162.783 11.9042 162.785 12.3151L162.795 12.3401ZM168.085 7.35508H170.6V18.4501H168.085V7.35508ZM175.995 3.11009H173.48V18.4501H175.995V3.11009ZM178.875 7.35508H181.39V18.4501H178.875V7.35508ZM187.135 4.31006H184.635V7.35506H183.255V9.54006H184.635V15.3801C184.635 17.8201 185.93 18.6401 187.765 18.6401C188.552 18.6626 189.329 18.4652 190.01 18.0701V16.0001C189.534 16.252 189.003 16.3825 188.465 16.3801C187.62 16.3801 187.125 15.9801 187.125 14.9951V9.54006H190.05V7.35506H187.125L187.135 4.31006ZM197.095 15.5951L199.945 7.35508H202.53L198.205 18.7451C197.34 21.0351 196.375 21.8751 194.625 21.8751C193.718 21.8897 192.826 21.6488 192.05 21.1801L192.895 19.3101C193.338 19.573 193.84 19.7177 194.355 19.7301C195.055 19.7301 195.49 19.4151 195.9 18.4701L191.37 7.35508H194.045L197.095 15.5951ZM169.345 5.62009C170.038 5.62009 170.6 5.0582 170.6 4.36509C170.6 3.67197 170.038 3.11009 169.345 3.11009C168.652 3.11009 168.09 3.67197 168.09 4.36509C168.09 5.0582 168.652 5.62009 169.345 5.62009ZM181.385 4.36509C181.385 5.0582 180.823 5.62009 180.13 5.62009C179.437 5.62009 178.875 5.0582 178.875 4.36509C178.875 3.67197 179.437 3.11009 180.13 3.11009C180.823 3.11009 181.385 3.67197 181.385 4.36509Z' fill='white'/>\n</svg>\n"
    })));
  }
  widget.register(Widget);
})();
