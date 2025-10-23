export interface Translations {
  // Navigation
  nav: {
    about: string;
    features: string;
    calculator: string;
    applications: string;
    process: string;
    products: string;
    pricing: string;
    site: string;
    signUp: string;
    logIn: string;
    signIn: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    getStarted: string;
    apiDocument: string;
    coinList: string;
    packageInfo: string;
    transparencyInfo: string;
    comingSoon: {
      title: string;
      message: string;
      closeButton: string;
    };
  };

  // ASIC Section
  asic: {
    title: string;
    description: string;
    cards: {
      hashpower: {
        title: string;
        description: string;
      };
      mergeMining: {
        title: string;
        description: string;
      };
      hashpowerReward: {
        title: string;
        description: string;
      };
    };
  };

  // Features Section
  features: {
    title: string;
    description: string;
    items: {
      growth: {
        title: string;
        description: string;
      };
      multiCoin: {
        title: string;
        description: string;
      };
      realAsset: {
        title: string;
        description: string;
      };
      continuousValue: {
        title: string;
        description: string;
      };
      transparentData: {
        title: string;
        description: string;
      };
      costEffective: {
        title: string;
        description: string;
      };
      expandable: {
        title: string;
        description: string;
      };
      differentiatedExperience: {
        title: string;
        description: string;
      };
      globalCompatibility: {
        title: string;
        description: string;
      };
    };
  };

  // Applications Section
  applications: {
    title: string;
    description: string;
    items: {
      ecommerce: {
        title: string;
        description: string;
        features: string[];
      };
      nftGaming: {
        title: string;
        description: string;
        features: string[];
      };
      education: {
        title: string;
        description: string;
        features: string[];
      };
      healthcare: {
        title: string;
        description: string;
        features: string[];
      };
      finance: {
        title: string;
        description: string;
        features: string[];
      };
      travel: {
        title: string;
        description: string;
        features: string[];
      };
      social: {
        title: string;
        description: string;
        features: string[];
      };
      mobility: {
        title: string;
        description: string;
        features: string[];
      };
      entertainment: {
        title: string;
        description: string;
        features: string[];
      };
    };
    common: {
      mainFeatures: string;
      viewDetails: string;
    };
  };

  // Comparison Section
  comparison: {
    title: string;
    description: {
      part1: string;
      highlight1: string;
      part2: string;
      part3: string;
      highlight2: string;
      part4: string;
    };
    cards: {
      traditional: {
        title: string;
        points: string[];
      };
      hashdam: {
        title: string;
        points: string[];
      };
    };
    bottomMessage: {
      part1: string;
      highlight: string;
      part2: string;
    };
  };

  // Calculator Section
  calculator: {
    title: string;
    description: string;
    hashPowerLabel: string;
    rangeInfo: string;
    monthlyProfitLabel: string;
    miningStatsTitle: string;
    coinDailyExampleTitle: string;
    dailyLabel: string;
    loadingText: string;
    stats: {
      hashrate24h: string;
      reject: string;
      efficiency: string;
    };
  };

  // Process Section
  process: {
    title: string;
    description: string;
    steps: {
      signup: {
        title: string;
        description: string;
      };
      purchase: {
        title: string;
        description: string;
      };
      distribute: {
        title: string;
        description: string;
      };
      mining: {
        title: string;
        description: string;
      };
      withdraw: {
        title: string;
        description: string;
      };
    };
  };

  // Statistics Section
  statistics: {
    title: string;
    description: string;
    stats: {
      miner: string;
      totalHashpower: string;
      distributedHashpower: string;
      users: string;
    };
  };

  // Membership Section
  membership: {
    title: string;
    description: string;
    recommended: string;
    features: {
      oneTimePurchase: string;
      cumulativePurchase: string;
      hashPower: string;
      oneYear: string;
      twoYear: string;
      threeYear: string;
      projectCount: string;
      api: string;
      hashWallet: string;
    };
    navigation: {
      previous: string;
      next: string;
    };
  };

  // CTA Section
  cta: {
    title: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    features: string[];
    form: {
      placeholders: {
        company: string;
        name: string;
        email: string;
        phone: string;
        purpose: string;
      };
      validation: {
        companyMinLength: string;
        nameMinLength: string;
        nameInvalidFormat: string;
        emailInvalid: string;
        phoneInvalid: string;
        purposeMinLength: string;
      };
      privacyLabel: string;
      submitButton: string;
      submittingButton: string;
      successMessage: string;
      errorMessage: string;
      networkError: string;
    };
  };

  // Product Pricing Section
  productPricing: {
    title: string;
    description: string;
    plans: {
      oneYear: {
        title: string;
        status: string;
        description: string;
        features: string[];
        buttonText: string;
      };
      twoYear: {
        title: string;
        status: string;
        description: string;
        features: string[];
        buttonText: string;
      };
      threeYear: {
        title: string;
        status: string;
        description: string;
        features: string[];
        buttonText: string;
      };
      unlimited: {
        title: string;
        status?: string;
        description: string;
        features: string[];
        buttonText: string;
      };
    };
    bestValue: string;
  };
  businessBenefits: {
    heroTitle: string;
    heroDescription: string;
    mainTitle: string;
    mainDescription: string;
    benefitsTitle: string;
    benefitsDescription: string;
    whyHashRewardTitle: string;
    dashboardNote: string;
    metrics: {
      loyaltyIndex: {
        label: string;
        description: string;
      };
      newRevenue: {
        label: string;
        description: string;
      };
      operationalEfficiency: {
        label: string;
        description: string;
      };
      brandValue: {
        label: string;
        description: string;
      };
    };
    benefits: {
      salesGrowth: {
        title: string;
        description: string;
        features: string[];
      };
      newRevenueModel: {
        title: string;
        description: string;
        features: string[];
      };
      costReduction: {
        title: string;
        description: string;
        features: string[];
      };
      brandESG: {
        title: string;
        description: string;
        features: string[];
      };
    };
    additionalFeatures: {
      realValue: {
        title: string;
        description: string;
      };
      virtuous: {
        title: string;
        description: string;
      };
      easyIntegration: {
        title: string;
        description: string;
      };
    };
    dashboardMetrics: {
      dailyReward: string;
      apiIntegration: string;
      settlementReport: string;
      dailyRewardValue: string;
      apiIntegrationValue: string;
      settlementReportValue: string;
    };
  };

  // Footer
  footer: {
    downloadNow: string;
    license: string;
    about: string;
    features: string;
    pricing: string;
    news: string;
    help: string;
    contact: string;
    getTheApp: string;
    copyright: string;
  };

  // Site Page
  site: {
    title: string;
    description: string;
    bityou: {
      title: string;
      description: string;
    };
    hashdam: {
      title: string;
      description: string;
    };
    mcom: {
      title: string;
      description: string;
    };
    partnership: string;
    miningCompany: {
      title: string;
      description: string;
      license: string;
      environment: string;
      compliance: string;
      transparency: string;
    };
    gallery: {
      title: string;
      description: string;
      sibu: string;
      miri: string;
      asCenter: string;
      imageLoadError: string;
    };
  };

  // Common
  common: {
    loading: string;
    calculatorLoading: string;
    skipToContent: string;
    sections: {
      about: string;
      comparison: string;
      features: string;
      asic: string;
      calculator: string;
      applications: string;
      business: string;
      process: string;
      products: string;
      statistics: string;
      pricing: string;
      contact: string;
    };
  };

  // SEO & Meta
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const translations: Record<'ko' | 'en' | 'ja', Translations> = {
  ko: {
    nav: {
      about: '소개',
      features: '특징',
      calculator: '계산기',
      applications: '활용',
      process: '프로세스',
      products: '상품',
      pricing: '요금제',
      site: '사이트',
      signUp: '회원가입',
      logIn: '로그인',
      signIn: '로그인',
    },
    hero: {
      badge: '리워드는 소비가 아니라 자산',
      title1: '해시파워 기반의 새로운',
      title2: '지속 성장형 리워드',
      title3: '플랫폼',
      description: 'HashDam은 해시를 충전하면 매일 코인을 리워드 받는 차세대 리워드입니다. Api로 서비스에 쉽게 붙이고, 데이터는 투명하게 검증됩니다.',
      getStarted: 'Get Started',
      apiDocument: 'API Document',
      coinList: 'Coin : LTC / DOGE / BELLS / LKY / PEP / JKC / DINGO / SHIC',
      packageInfo: '1년, 2년, 3년 형 패키지 / 전기,유지포함',
      transparencyInfo: '투명데이터, ZKP 검증 로드맵',
      comingSoon: {
        title: '준비 중입니다',
        message: '현재 서비스 준비 중입니다. 곧 더 나은 서비스로 찾아뵙겠습니다.',
        closeButton: '확인',
      },
    },
    asic: {
      title: 'Hashdam?',
      description: 'Hashdam은 해시파워를 모아 저장하고, 그것을 흘려보내며, 코인/리워드라는 새로운 가치를 만들어내는 플랫폼이라는 뜻을 가집니다.\nHashdam의 구성요소는 ASIC 채굴기를 통해 생성된 해시파워와, 병합채굴을 통해 8종 이상의 코인을 매일 생산합니다.\n이 해시파워는 곧 리워드가 되어, 고객과 파트너 모두에게 새로운 성장 기회를 제공합니다.',
      cards: {
        hashpower: {
          title: 'ASIC & Hashpower',
          description: '해시파워(해시율)는 블록체인에서 거래를 처리하고 채굴에 필요한 암호화 퍼즐을 해결하는 연산능력을 의미합니다. 높은 해시파워를 보유한 채굴자는 더 빠르게 거래를 검증하고 네트워크를 보호할 수 있어, 결과적으로 더 많은 블록 보상을 얻을 수 있습니다. 해시파워는 암호화폐의 채굴속도와 효율성을 결정하는 핵심 요소입니다.',
        },
        mergeMining: {
          title: 'Merge Mining?',
          description: '병합 채굴은 하나의 작업 증명(Proof of Work)으로 여러 블록체인을 동시에 채굴하는 방식입니다. 예를 들어, 라이트코인(LTC) 채굴과 함께 도지코인(DOGE), 벨스코인(BELLS), 럭키코인(LKY), 페페코인(PEP), 정크코인(JKC), 딩고코인(DINGO), 시바코인(SHIC) 등을 동시에 채굴할 수 있어 효율성과 보상을 높일 수 있습니다.',
        },
        hashpowerReward: {
          title: 'Hashpower Reward',
          description: '사용자는 특정 활동(예: 회원가입, 추천활동, 음악 스트리밍, 게임 플레이, 쇼핑, 운동 등)을 하면 해시파워를 보상으로 지급받고, 이를 LTC+DOGE+BELLS+JKC+LKY+PEP+DONGO+SHIC 코인의 채굴과 추가코인을 결합하여 보상으로 지급할 수 있습니다.',
        },
      },
    },
    features: {
      title: 'Hashdam features',
      description: '기존 포인트보다 더 강력한 가치와 차별화된 고객 경험을 제공할 수 있습니다. "Hashdam"과 함께라면 고객은 단순 소비자가 아닌, 성장의 파트너가 됩니다.',
      items: {
        growth: {
          title: '성장성',
          description: '정해진 포인트가 아닌,\n해시를 기반으로 매일 새로운 코인이 채굴됩니다.\n→ 시간이 지날수록 리워드의 가치가 변하고\n성장할 수 있습니다',
        },
        multiCoin: {
          title: '멀티코인보상',
          description: '하나의 해시파워로 현재 8종 이상의 코인이\n동시에 채굴됩니다.\n→ 다양한 코인 보상을 통해 리스크를 분산하고\n기대 가치를 높입니다',
        },
        realAsset: {
          title: '실질적 자산성',
          description: '해시로 채굴된 코인은 모두 거래소에\n상장되어 있습니다.\n→ 단순 적립 포인트가 아닌, 실제 시장에서\n거래 가능한 자산입니다',
        },
        continuousValue: {
          title: '지속적 가치 제공',
          description: '포인트 소멸이나 유효기간의 제약이 없습니다.\n→ 해시를 보유하는 하고, 채굴은 계속되고\n리워드도 지속됩니다.',
        },
        transparentData: {
          title: '투명한 데이터 기반',
          description: '실시간 해시레이트와 채굴 데이터를\n확인할 수 있습니다.\n→ 고객과 파트너는 리워드의 근거를\n투명하게 검증할 수 있습니다.',
        },
        costEffective: {
          title: '비용 효율인 시스템',
          description: '기업은 매번 새 비용을 쓰는 대신,\n해시파워로 장기적 리워드를 제공합니다.\n→ 고객 충성도를 높이면서도 마케팅 비용을\n효율적으로 관리할 수 있습니다.',
        },
        expandable: {
          title: '확장 가능한 활용분야',
          description: '이커머스, 엔터테인먼트, 교육, 핀테크 등\n다양한 산업에 적용 가능합니다.\n→ 해시리워드는 단순 리워드가 아닌\n새로운 비즈니스 모델로 확장됩니다',
        },
        differentiatedExperience: {
          title: '차별화된 고객 경험',
          description: '일회성 할인이나 포인트 적립이 아닌,\n성장하는 자산 보상을 제공합니다.\n→ 고객은 단순 소비자가 아니라 투자와 성장을\n경험하는 참여자가 됩니다.',
        },
        globalCompatibility: {
          title: '글로벌 호환성',
          description: '채굴된 코인은 거래소 상장을 통해\n국경을 넘어 유통과 교환이 가능합니다.\n→ 리워드 플랫폼을 글로벌 시장으로\n확장할 수 있습니다.',
        },
      },
    },
    applications: {
      title: 'Applications',
      description: '모든 브랜드와 사용자가 해시리워드로 연결되는 세상, 해시댐은 오프라인부터\n온체인까지, 어떤 산업에서도 행동을 가치로 바꾸는 보상 엔진입니다.',
      items: {
        ecommerce: {
          title: '이커머스&리테일',
          description: '상품 구매 시 단순 포인트가 아닌 해시파워를 지급합니다. 고객은 구매할 때마다 해시를 적립하고, 시간이 지날수록 채굴된 코인을 리워드로 받게 됩니다. 쇼핑이 곧 투자로 연결됩니다.',
          features: ['• 구매 금액 해시 적립', '• 상품 리뷰 작성 보너스', '• 멤버십 등급별 혜택', '• 재구매 고객 추가 리워드'],
        },
        nftGaming: {
          title: 'NFT&게임',
          description: '게임 아이템과 NFT를 해시리워드와 연동하여, 플레이 자체가 채굴과 보상으로 이어집니다. 유저는 게임 속에서 자산을 얻고, 실제 가치 있는 코인으로 전환할 수 있습니다.',
          features: ['• 게임 플레이 해시 적립', '• NFT 거래 수수료 할인', '• 레어 아이템 추가 보상', '• 토너먼트 참가 혜택'],
        },
        education: {
          title: '교육&콘텐츠',
          description: '온라인 강의 수강, 콘텐츠 구독 등 학습 활동에 해시리워드를 제공합니다. 배움이 곧 수익으로 이어지는 새로운 교육 생태계를 경험하세요.',
          features: ['• 강의 수강 해시 적립', '• 과제 완료 보너스', '• 수료증 발급 리워드', '• 멘토링 참가 혜택'],
        },
        healthcare: {
          title: '헬스케어&피트니스',
          description: '운동 기록, 건강 관리 앱 사용 등 건강한 라이프스타일을 유지할 때마다 해시를 적립합니다. 건강 관리가 곧 자산 증식으로 연결됩니다.',
          features: ['• 운동 기록 해시 적립', '• 건강 목표 달성 보너스', '• 웨어러블 연동 리워드', '• 커뮤니티 챌린지 참가'],
        },
        finance: {
          title: '금융&투자',
          description: '투자 앱 사용, 금융 상품 가입 등 금융 활동에 해시리워드를 제공합니다. 투자하면서 동시에 채굴 보상까지 받는 이중 수익 구조입니다.',
          features: ['• 투자 거래 해시 적립', '• 포트폴리오 관리 보너스', '• 금융 상품 가입 리워드', '• 투자 교육 참가 혜택'],
        },
        travel: {
          title: '여행&라이프스타일',
          description: '여행 예약, 숙박, 맛집 방문 등 라이프스타일 활동에 해시리워드를 제공합니다. 일상의 모든 순간이 채굴과 보상의 기회가 됩니다.',
          features: ['• 여행 예약 해시 적립', '• 리뷰 작성 보너스', '• 체크인 리워드', '• 로열티 프로그램 연동'],
        },
        social: {
          title: '소셜&커뮤니티',
          description: 'SNS 활동, 커뮤니티 참여, 콘텐츠 제작 등 소셜 활동에 해시리워드를 제공합니다. 소통하고 공유하는 모든 활동이 가치로 전환됩니다.',
          features: ['• 포스팅 해시 적립', '• 좋아요/댓글 보너스', '• 콘텐츠 제작 리워드', '• 인플루언서 프로그램'],
        },
        mobility: {
          title: '모빌리티&교통',
          description: '대중교통 이용, 카셰어링, 배달 서비스 등 모빌리티 서비스 이용 시 해시리워드를 제공합니다. 이동하는 모든 순간이 채굴의 기회입니다.',
          features: ['• 대중교통 이용 적립', '• 카셰어링 보너스', '• 친환경 이동 리워드', '• 배달 서비스 할인'],
        },
        entertainment: {
          title: '엔터테인먼트&미디어',
          description: 'OTT 시청, 음악 스트리밍, 게임 등 엔터테인먼트 활동에 해시리워드를 제공합니다. 즐기면서 동시에 수익을 창출하는 새로운 경험을 제공합니다.',
          features: ['• 콘텐츠 시청 해시 적립', '• 구독 서비스 보너스', '• 리뷰 작성 리워드', '• 프리미엄 혜택 제공'],
        },
      },
      common: {
        mainFeatures: '주요 특징',
        viewDetails: '자세히 보기',
      },
    },
    comparison: {
      title: '리워드를 바꾸면, 새로운 기회가 열립니다',
      description: {
        part1: '"Hashdam"은 단순한 보상이 아닌, ',
        highlight1: '해시파워 기반 리워드',
        part2: '라는 새로운 관점을 제시합니다. 리워드를 바라보는 시각을 바꾸는 순간, 사용자는 더 큰 가치를 경험하고, 파트너는 새로운 시장과 기회를 발견하게 됩니다.',
        part3: '이제 리워드는 단순 적립이 아니라, ',
        highlight2: '투자/성장/확장',
        part4: '의 가능성을 열어주는 시작점입니다.',
      },
      cards: {
        traditional: {
          title: '기존의 방식 : 소모되는 비용',
          points: [
            '기존의 리워드는 고객에게 잠깐의 할인 혜택만 제공하고 관계는 이어지지 않습니다.',
            '시간이 지나면 적립된 포인트는 가치가 하락하거나 소멸되며, 사용하지 않으면 아무런 의미가 없습니다.',
            '결국 기업은 고객을 붙잡기 위해 끝없이 비용을 투입해야 하는 구조에 갇히게 됩니다'
          ],
        },
        hashdam: {
          title: '새로운 대안 : 성장하는 \'자산\'',
          points: [
            '고객에게 "성장"하는 자산을 선물하여 지속적인 관계를 구축합니다.',
            '시간이 지날수록 스스로 가치를 키워가는 강력한 lock-in 효과를 제공합니다.',
            '고객 이탈이라는 누수를 막는, 단 한 번의 투자로 짓는 견고한 댐입니다.'
          ],
        },
      },
      bottomMessage: {
        part1: '일반 리워드는 사용 시 소멸, ',
        highlight: '해시리워드는 시간과 함께 누적 증가',
        part2: '합니다.',
      },
    },
    calculator: {
      title: 'Profit Calculator',
      description: '해시값을 드래그하면 실시간으로 예상 채굴수익이 갱신됩니다.',
      hashPowerLabel: '해시파워(Mh/s)',
      rangeInfo: '1~10,000',
      monthlyProfitLabel: '예상 월 적립(합계)',
      miningStatsTitle: '채굴 통계',
      coinDailyExampleTitle: '코인별 일일 예시',
      dailyLabel: 'Daily',
      loadingText: 'Loading...',
      stats: {
        hashrate24h: '24h Hashrate',
        reject: 'Reject',
        efficiency: 'Efficiency',
      },
    },
    process: {
      title: 'How to Process',
      description: '아래의 5단계를 따라 쉽고 빠르게 채굴을 시작해 보세요. 각 단계는 서비스 이용의 핵심적인 과정을 담고 있습니다.',
      steps: {
        signup: {
          title: '회원가입',
          description: '간단한 정보 입력으로 서비스에 가입하여 모든 기능을 이용할 준비를 합니다.',
        },
        purchase: {
          title: 'HashCredit 구매',
          description: '채굴에 필요한 해시크레딧을 구매합니다. 다양한 결제 수단을 지원합니다.',
        },
        distribute: {
          title: 'HashPower 분배',
          description: '구매한 해시크레딧을 원하는 채굴 풀에 분배하여 채굴 효율을 최적화합니다.',
        },
        mining: {
          title: '채굴',
          description: '분배된 해시파워로 자동 채굴이 시작되며, 실시간으로 수익을 확인할 수 있습니다.',
        },
        withdraw: {
          title: '출금',
          description: '채굴된 수익을 언제든지 원하는 지갑으로 안전하고 빠르게 출금할 수 있습니다.',
        },
      },
    },
    productPricing: {
      title: 'Product',
      description: '해시댐의 제품 플랜을 통해 귀사의 비즈니스에 가장 적합한 솔루션을 찾아보세요.',
      plans: {
        oneYear: {
          title: '1년 플랜',
          status: '인기',
          description: '단기 프로젝트에 적합한 기본 플랜',
          features: [
            '기본 해시파워 제공',
            '월간 수익 리포트',
            '24/7 고객 지원',
            '기본 API 연동'
          ],
          buttonText: '시작하기',
        },
        twoYear: {
          title: '2년 플랜',
          status: '추천',
          description: '중장기 성장을 위한 균형잡힌 플랜',
          features: [
            '향상된 해시파워',
            '주간 상세 분석',
            '우선 고객 지원',
            '고급 API 기능',
            '커스텀 대시보드'
          ],
          buttonText: '선택하기',
        },
        threeYear: {
          title: '3년 플랜',
          status: '최고가치',
          description: '장기 투자를 위한 프리미엄 플랜',
          features: [
            '최대 해시파워',
            '실시간 모니터링',
            '전담 계정 매니저',
            '완전한 API 액세스',
            '맞춤형 솔루션',
            '우선 기술 지원'
          ],
          buttonText: '문의하기',
        },
        unlimited: {
          title: '무제한 플랜',
          description: '대규모 기업을 위한 맞춤형 솔루션',
          features: [
            '무제한 해시파워',
            '완전 맞춤형 설정',
            '전용 인프라',
            '24/7 전담 지원',
            '고급 보안 기능',
            '글로벌 확장 지원'
          ],
          buttonText: '상담 신청',
        },
      },
      bestValue: 'BEST VALUE',
    },
    businessBenefits: {
      heroTitle: '고객사는 어떤 혜택을 얻나요?',
      heroDescription: '고객 충성도를 저장하고 발전시키는 비즈니스를 통한 성장 과정',
      mainTitle: '당신의 서비스에 매일 코인이 흐르게 하세요',
      mainDescription: '해시리워드 단일 구현으로 매출, 고객, 브랜드가 모두 함께 성장합니다. 고객이 더 활발해질수록 해시파워가 축적되고, 실제 코인이 매일 채굴되어 가치 있는 리워드로 돌아옵니다.',
      benefitsTitle: '파트너를 위한 해시리워드의 4가지 주요 혜택',
      benefitsDescription: '매일 업데이트되는 채굴 리워드와 간단한 API 연동으로 재방문과 매출을 동시에 촉진합니다.',
      whyHashRewardTitle: '왜 해시리워드인가?',
      dashboardNote: '★ 데이터와 UI는 예시이며, 실제 대시보드와 메트릭은 파트너 환경에 맞춰 제공됩니다.',
      metrics: {
        loyaltyIndex: {
          label: '충성도 지수',
          description: '월간 재방문, 멤버십 전환',
        },
        newRevenue: {
          label: '새로운 수익원',
          description: '해시 판매, 수익 공유, 토큰 확장',
        },
        operationalEfficiency: {
          label: '운영 효율성',
          description: '인프라, 운영, 정산 비용',
        },
        brandValue: {
          label: '브랜드 가치',
          description: 'ESG 혁신, 글로벌 확장',
        },
      },
      benefits: {
        salesGrowth: {
          title: '매출 성장 & 충성도',
          description: '매일 축적되는 코인 리워드로 고객이\n자발적으로 재방문하고 멤버십 전환\n율이 향상됩니다.',
          features: [
            '매일 리워드 업데이트 => 재방문 촉진',
            '프리미엄 멤버십/패키지 전환',
            '해시 축적 & 레벨업의 게이미피케이션 경험'
          ],
        },
        newRevenueModel: {
          title: '새로운 수익 모델',
          description: '해시 상품 판매, 채굴 수익 공유,\n브랜드 토큰 & NFT가 2차, 3차\n수익원을 창출합니다.',
          features: [
            '해시파워 판매/재판매 수익',
            '채굴 수익 일부 공유 구조',
            '브랜드 코인 & NFT 확장'
          ],
        },
        costReduction: {
          title: '비용 절감 & 운영 효율성',
          description: '하드웨어나 유지보수 부담 없이\nSaaS API로 시작하고, 자동화된\n투명한 정산을 진행합니다.',
          features: [
            '제로 인프라 구현',
            '매일 자동 정산 & 리포팅',
            '기존 시스템과의 간단한 API 연동'
          ],
        },
        brandESG: {
          title: '브랜드 & ESG 가치',
          description: '친환경적이고 디지털 혁신\n이미지를 강화하고, 다국어·다코인\n지원으로 글로벌 확장을 지원합니다.',
          features: [
            'ESG & 혁신 포지셔닝',
            '글로벌 고객 확보',
            '데이터 기반 캠페인/상품 기획'
          ],
        },
      },
      additionalFeatures: {
        realValue: {
          title: '실질 가치 리워드',
          description: '리워드는 포인트가 아닌 실제 채굴된 코인으로 지급되어 고객에게 높은 인지 가치를 제공합니다.',
        },
        virtuous: {
          title: '선순환 구조',
          description: '활동 => 해시 축적 => 매일 리워드 => 재방문 => 추가 활동의 루프가 형성됩니다.',
        },
        easyIntegration: {
          title: '쉽고 빠른 연동',
          description: '쇼핑몰, 결제, 앱, 멤버십 등 기존 시스템과의 간단한 API 연동이 가능합니다.',
        },
      },
      dashboardMetrics: {
        dailyReward: '일일보상',
        apiIntegration: 'API 연동',
        settlementReport: '정산 리포트',
        dailyRewardValue: '24h',
        apiIntegrationValue: '간편',
        settlementReportValue: '자동',
      },
    },

    statistics: {
      title: '1년간의 성과',
      description: '우리의 강력한 기술로 이룬 성과입니다',
      stats: {
        miner: 'Miner',
        totalHashpower: 'Total Hashpower (Mh/s)',
        distributedHashpower: '분배된 해시파워',
        users: 'Users',
      },
    },
    membership: {
      title: 'Membership Condition',
      description: '해시댐의 제품 플랜을 통해 귀사의 비즈니스에 가장 적합한 솔루션을 찾아보세요.',
      recommended: '추천',
      features: {
        oneTimePurchase: '일시구매',
        cumulativePurchase: '누적구매',
        hashPower: 'HashPower',
        oneYear: '1년(예상 수익)',
        twoYear: '2년(예상 수익)',
        threeYear: '3년(예상 수익)',
        projectCount: '프로 API 수',
        api: 'API',
        hashWallet: '해시월렛',
      },
      navigation: {
        previous: '이전 멤버십',
        next: '다음 멤버십',
      },
    },
    cta: {
      title: {
        part1: '해시리워드를 도입하고 왜',
        part2: ' 매출 · 고객 · 브랜드',
        part3: '를 동시에 키우세요',
      },
      description: '간단한 상담으로 현재 시스템에 맞춘 통합 방안을 제안드립니다. 하드웨어 없이 바로 시작할 수 있습니다.',
      features: [
        '도입진단 & ROI 예상치 제공',
        'API 연동 가이드 & 샘플코드',
        '정산/리포트 대시보드 제공',
      ],
      form: {
        placeholders: {
          company: '회사명',
          name: '담당자 성명',
          email: '이메일',
          phone: '연락처',
          purpose: '도입목적 및 궁금한 점을 적어주세요',
        },
        validation: {
          companyMinLength: '회사명은 최소 2글자 이상 입력해주세요.',
          nameMinLength: '담당자 성명은 최소 2글자 이상 입력해주세요.',
          nameInvalidFormat: '담당자 성명은 한글 또는 영문만 입력 가능합니다.',
          emailInvalid: '올바른 이메일 형식을 입력해주세요.',
          phoneInvalid: '올바른 전화번호 형식을 입력해주세요. (예: 010-0000-0000)',
          purposeMinLength: '도입목적은 최소 10글자 이상 입력해주세요.',
        },
        privacyLabel: '제출시 개인정보 처리방침에 동의한 것으로 간주됩니다.',
        submitButton: '적용 상담하기',
        submittingButton: '전송 중...',
        successMessage: '상담 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
        errorMessage: '상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.',
        networkError: '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.',
      },
    },
    footer: {
      downloadNow: 'Download Now',
      license: 'License',
      about: 'About',
      features: 'Features',
      pricing: 'Pricing',
      news: 'News',
      help: 'Help',
      contact: 'Contact',
      getTheApp: 'Get the App',
      copyright: '© 2021 Landify UI Kit. All rights reserved',
    },
    site: {
      title: '"마이닝 사이트"',
      description: '말레이시아 보르네오 섬의 전문 채굴장에서 안정적이고 투명한 해시파워를 제공합니다.',
      bityou: {
        title: 'BITYOU',
        description: '보르네오섬 사라워 10년이상 채굴장 운영 및 AS 서비스 센터 운영',
      },
      hashdam: {
        title: 'HashDam',
        description: '채굴장 운영 및 해시리워드 플랫폼',
      },
      mcom: {
        title: 'MCOM',
        description: '해시 호스팅 및 암호화폐 스토리지 서비스',
      },
      partnership: '통합 파트너쉽 네트워크',
      miningCompany: {
        title: '채굴회사',
        description: '말레이시아 정부로부터 정식 허가를 받은 합법적인 채굴 운영',
        license: '말레이시아 정부 공식 라이센스 보유',
        environment: '환경 규제 준수 및 지속가능한 운영',
        compliance: '현지 법무 완전 준수',
        transparency: '투명한 운영 및 정기 감사',
      },
      gallery: {
        title: '채굴장 갤러리',
        description: '실제 방문하여 촬영한 채굴장의 모습을 확인해 보세요',
        sibu: 'Sibu',
        miri: 'Miri',
        asCenter: 'A/S센터',
        imageLoadError: '이미지 로드 실패',
      },
    },
    common: {
      loading: '로딩 중...',
      calculatorLoading: '계산기 로딩 중...',
      skipToContent: '본문으로 건너뛰기',
      sections: {
        about: '파트너사 소개',
        comparison: '서비스 비교',
        features: '주요 기능',
        asic: 'ASIC 마이닝',
        calculator: '수익 계산기',
        applications: '활용 사례',
        business: '비즈니스 혜택',
        process: '이용 방법',
        products: '상품 소개',
        statistics: '통계 정보',
        pricing: '멤버십 요금제',
        contact: '문의하기',
      },
    },
    seo: {
      title: 'HashDam - 클라우드 마이닝 플랫폼 | 비트코인 채굴 서비스',
      description: 'HashDam은 안전하고 효율적인 클라우드 마이닝 플랫폼입니다. 비트코인, 이더리움 등 다양한 암호화폐 채굴 서비스를 제공합니다.',
      keywords: ['클라우드 마이닝', '비트코인 채굴', '암호화폐', 'HashDam', '해시댐', '마이닝 플랫폼', '해시파워', '암호화폐 리워드', '채굴 보상', 'B2B 리워드', 'API 통합', 'LTC', 'DOGE', '머지마이닝'],
    },
  },
  en: {
    nav: {
      about: 'About',
      features: 'Features',
      calculator: 'Calculator',
      applications: 'Applications',
      process: 'Process',
      products: 'Products',
      pricing: 'Pricing',
      site: 'Site',
      signUp: 'Sign Up',
      logIn: 'Log In',
      signIn: 'Sign In',
    },
    hero: {
      badge: 'Rewards are assets, not consumption',
      title1: 'Hashpower-based new',
      title2: 'Sustainable growth rewards',
      title3: 'platform',
      description: 'HashDam is a next-generation reward system where you receive daily coin rewards by charging hash. Easily integrate with services via API, and data is transparently verified.',
      getStarted: 'Get Started',
      apiDocument: 'API Document',
      coinList: 'Coins: LTC / DOGE / BELLS / LKY / PEP / JKC / DINGO / SHIC',
      packageInfo: '1, 2, 3 year packages / Electricity and maintenance included',
      transparencyInfo: 'Transparent data, ZKP verification roadmap',
      comingSoon: {
        title: 'Coming Soon',
        message: 'The service is currently under preparation. We will be back with better service soon.',
        closeButton: 'Close',
      },
    },
    asic: {
      title: 'What is Hashdam?',
      description: 'Hashdam is a platform that collects and stores hashpower, distributes it efficiently, and creates new value in the form of coins and rewards.\nHashdam\'s core components include hashpower generated through ASIC miners and daily production of 8+ types of coins through merge mining.\nThis hashpower becomes sustainable rewards, providing new growth opportunities for both customers and partners.',
      cards: {
        hashpower: {
          title: 'ASIC & Hashpower',
          description: 'Hashpower (hash rate) refers to the computational power needed to process transactions and solve cryptographic puzzles required for mining in blockchain. Miners with high hashpower can verify transactions faster and protect the network, ultimately earning more block rewards. Hashpower is a key factor that determines the mining speed and efficiency of cryptocurrencies.',
        },
        mergeMining: {
          title: 'What is Merge Mining?',
          description: 'Merge mining is a method of simultaneously mining multiple blockchains with one Proof of Work. For example, along with Litecoin (LTC) mining, you can simultaneously mine Dogecoin (DOGE), Bellscoin (BELLS), Luckycoin (LKY), Pepecoin (PEP), Junkcoin (JKC), Dingocoin (DINGO), Shibacoin (SHIC), etc., increasing efficiency and rewards.',
        },
        hashpowerReward: {
          title: 'Hashpower Reward',
          description: 'Users receive hashpower as rewards for specific activities (e.g., membership registration, referral activities, music streaming, gaming, shopping, exercise, etc.), and can combine this with mining of LTC+DOGE+BELLS+JKC+LKY+PEP+DONGO+SHIC coins and additional coins to provide as rewards.',
        },
      },
    },
    features: {
      title: 'Hashdam Features',
      description: 'We can provide stronger value and differentiated customer experience than existing points. With "Hashdam", customers become partners in growth, not just consumers.',
      items: {
        growth: {
          title: 'Growth Potential',
          description: 'Instead of fixed points,\nnew coins are mined daily based on hash.\n→ The value of rewards can change and\ngrow over time',
        },
        multiCoin: {
          title: 'Multi-Coin Rewards',
          description: 'Currently, 8 or more types of coins are\nmined simultaneously with one hashpower.\n→ Diversify risks and increase expected value\nthrough various coin rewards',
        },
        realAsset: {
          title: 'Real Asset Value',
          description: 'All coins mined with hash are\nlisted on exchanges.\n→ Not just accumulated points, but actual\nassets tradable in the market',
        },
        continuousValue: {
          title: 'Continuous Value Provision',
          description: 'No constraints of point expiration\nor validity period.\n→ Hold hash and mining continues,\nrewards persist.',
        },
        transparentData: {
          title: 'Transparent Data-Based',
          description: 'Real-time hash rate and mining data\ncan be verified.\n→ Customers and partners can\ntransparently verify the basis of rewards.',
        },
        costEffective: {
          title: 'Cost-Efficient System',
          description: 'Instead of spending new costs every time,\ncompanies provide long-term rewards with hashpower.\n→ Efficiently manage marketing costs\nwhile increasing customer loyalty.',
        },
        expandable: {
          title: 'Expandable Application Areas',
          description: 'Applicable to various industries such as\ne-commerce, entertainment, education, fintech.\n→ Hash rewards expand as new business models,\nnot just simple rewards',
        },
        differentiatedExperience: {
          title: 'Differentiated Customer Experience',
          description: 'Provides growing asset rewards,\nnot one-time discounts or point accumulation.\n→ Customers become participants experiencing\ninvestment and growth, not just consumers.',
        },
        globalCompatibility: {
          title: 'Global Compatibility',
          description: 'Mined coins can be distributed and\nexchanged across borders through exchange listings.\n→ Reward platforms can be expanded\nto global markets.',
        },
      },
    },
    applications: {
      title: 'Applications',
      description: 'In a world where all brands and users are connected through hash rewards, HashDam is a reward engine that\ntransforms actions into value across all industries, from offline to on-chain.',
      items: {
        ecommerce: {
          title: 'E-commerce & Retail',
          description: 'Provide hashpower instead of simple points when purchasing products. Customers accumulate hash with every purchase and receive mined coins as rewards over time. Shopping connects directly to investment.',
          features: ['• Hash accumulation for purchase amount', '• Product review writing bonus', '• Membership tier benefits', '• Additional rewards for repeat customers'],
        },
        nftGaming: {
          title: 'NFT & Gaming',
          description: 'Link game items and NFTs with hash rewards, so playing itself leads to mining and rewards. Users can obtain assets in games and convert them to valuable coins.',
          features: ['• Hash accumulation for gameplay', '• NFT transaction fee discounts', '• Additional rewards for rare items', '• Tournament participation benefits'],
        },
        education: {
          title: 'Education & Content',
          description: 'Provide hash rewards for learning activities such as taking online courses and content subscriptions. Experience a new educational ecosystem where learning leads to profit.',
          features: ['• Hash accumulation for course attendance', '• Assignment completion bonus', '• Certificate issuance rewards', '• Mentoring participation benefits'],
        },
        healthcare: {
          title: 'Healthcare & Fitness',
          description: 'Accumulate hash whenever you maintain a healthy lifestyle such as exercise records and health management app usage. Health management connects directly to asset growth.',
          features: ['• Hash accumulation for exercise records', '• Health goal achievement bonus', '• Wearable device integration rewards', '• Community challenge participation'],
        },
        finance: {
          title: 'Finance & Investment',
          description: 'Provide hash rewards for financial activities such as using investment apps and subscribing to financial products. A dual profit structure of receiving mining rewards while investing.',
          features: ['• Hash accumulation for investment transactions', '• Portfolio management bonus', '• Financial product subscription rewards', '• Investment education participation benefits'],
        },
        travel: {
          title: 'Travel & Lifestyle',
          description: 'Provide hash rewards for lifestyle activities such as travel bookings, accommodation, and restaurant visits. Every moment of daily life becomes an opportunity for mining and rewards.',
          features: ['• Hash accumulation for travel bookings', '• Review writing bonus', '• Check-in rewards', '• Loyalty program integration'],
        },
        social: {
          title: 'Social & Community',
          description: 'Provide hash rewards for social activities such as SNS activities, community participation, and content creation. All activities of communication and sharing are converted to value.',
          features: ['• Hash accumulation for posting', '• Like/comment bonus', '• Content creation rewards', '• Influencer program'],
        },
        mobility: {
          title: 'Mobility & Transportation',
          description: 'Provide hash rewards when using mobility services such as public transportation, car sharing, and delivery services. Every moment of movement becomes an opportunity for mining.',
          features: ['• Public transportation usage accumulation', '• Car sharing bonus', '• Eco-friendly transportation rewards', '• Delivery service discounts'],
        },
        entertainment: {
          title: 'Entertainment & Media',
          description: 'Provide hash rewards for entertainment activities such as OTT viewing, music streaming, and gaming. Experience generating profit while enjoying content.',
          features: ['• Hash accumulation for content viewing', '• Subscription service bonus', '• Review writing rewards', '• Premium benefits provision'],
        },
      },
      common: {
        mainFeatures: 'Main Features',
        viewDetails: 'View Details',
      },
    },
    comparison: {
      title: 'Change Rewards, Open New Opportunities',
      description: {
        part1: '"Hashdam" presents a new perspective of ',
        highlight1: 'hashpower-based rewards',
        part2: ', not just simple compensation. When you change your perspective on rewards, users experience greater value and partners discover new markets and opportunities.',
        part3: 'Now rewards are not just accumulation, but the starting point that opens up possibilities for ',
        highlight2: 'investment/growth/expansion',
        part4: '.',
      },
      cards: {
        traditional: {
          title: 'Traditional Method: Consumable Costs',
          points: [
            'Traditional rewards only provide temporary discount benefits to customers without building lasting relationships.',
            'Over time, accumulated points lose value or expire, becoming meaningless if unused.',
            'Eventually, companies are trapped in a structure where they must continuously invest costs to retain customers'
          ],
        },
        hashdam: {
          title: 'New Alternative: Growing \'Assets\'',
          points: [
            'Build lasting relationships by gifting customers "growing" assets.',
            'Provide powerful lock-in effects that grow in value over time.',
            'A solid dam built with a single investment that prevents customer churn leakage.'
          ],
        },
      },
      bottomMessage: {
        part1: 'Regular rewards disappear when used, ',
        highlight: 'hash rewards accumulate and increase over time',
        part2: '.',
      },
    },
    calculator: {
      title: 'Profit Calculator',
      description: 'Drag the hash value to update expected mining profits in real-time.',
      hashPowerLabel: 'Hashpower (Mh/s)',
      rangeInfo: '1~10,000',
      monthlyProfitLabel: 'Expected Monthly Accumulation (Total)',
      miningStatsTitle: 'Mining Statistics',
      coinDailyExampleTitle: 'Daily Example by Coin',
      dailyLabel: 'Daily',
      loadingText: 'Loading...',
      stats: {
        hashrate24h: '24h Hashrate',
        reject: 'Reject',
        efficiency: 'Efficiency',
      },
    },
    process: {
      title: 'How to Process',
      description: 'Follow the 5 steps below to start mining easily and quickly. Each step contains the core process of using the service.',
      steps: {
        signup: {
          title: 'Sign Up',
          description: 'Join the service with simple information input to prepare for using all features.',
        },
        purchase: {
          title: 'Purchase HashCredit',
          description: 'Purchase hash credits needed for mining. Various payment methods are supported.',
        },
        distribute: {
          title: 'Distribute HashPower',
          description: 'Distribute purchased hash credits to desired mining pools to optimize mining efficiency.',
        },
        mining: {
          title: 'Mining',
          description: 'Automatic mining starts with distributed hashpower, and you can check profits in real-time.',
        },
        withdraw: {
          title: 'Withdraw',
          description: 'You can safely and quickly withdraw mined profits to your desired wallet anytime.',
        },
      },
    },
    productPricing: {
      title: 'Product',
      description: 'Find the most suitable solution for your business through HashDam\'s product plans.',
      plans: {
        oneYear: {
          title: '1-Year Plan',
          status: 'Popular',
          description: 'Basic plan suitable for short-term projects',
          features: [
            'Basic hashpower provision',
            'Monthly profit reports',
            '24/7 customer support',
            'Basic API integration'
          ],
          buttonText: 'Get Started',
        },
        twoYear: {
          title: '2-Year Plan',
          status: 'Recommended',
          description: 'Balanced plan for medium to long-term growth',
          features: [
            'Enhanced hashpower',
            'Weekly detailed analysis',
            'Priority customer support',
            'Advanced API features',
            'Custom dashboard'
          ],
          buttonText: 'Choose Plan',
        },
        threeYear: {
          title: '3-Year Plan',
          status: 'Best Value',
          description: 'Premium plan for long-term investment',
          features: [
            'Maximum hashpower',
            'Real-time monitoring',
            'Dedicated account manager',
            'Full API access',
            'Customized solutions',
            'Priority technical support'
          ],
          buttonText: 'Contact Us',
        },
        unlimited: {
          title: 'Unlimited Plan',
          description: 'Customized solution for large enterprises',
          features: [
            'Unlimited hashpower',
            'Fully customized setup',
            'Dedicated infrastructure',
            '24/7 dedicated support',
            'Advanced security features',
            'Global expansion support'
          ],
          buttonText: 'Request Consultation',
        },
      },
      bestValue: 'BEST VALUE',
    },
    businessBenefits: {
      heroTitle: 'What benefits do customers get?',
      heroDescription: 'Growth process through business that builds and develops customer loyalty',
      mainTitle: 'Make coins flow into\nyour service every day',
      mainDescription: 'With a single implementation of HashReward, sales, customers, and brand all grow. As customers become more active, hash power accumulates, and real coins are mined daily and returned as valuable rewards.',
      benefitsTitle: '4 Major Benefits of HashReward for Partners',
      benefitsDescription: 'Daily updated mining rewards and simple API integration drive both revisits and sales simultaneously.',
      whyHashRewardTitle: 'Why HashReward?',
      dashboardNote: '★ Data and UI are examples, actual dashboard and metrics are provided according to partner environment.',
      metrics: {
        loyaltyIndex: {
          label: 'Loyalty Index',
          description: 'Monthly revisits, membership conversion',
        },
        newRevenue: {
          label: 'New Revenue Source',
          description: 'Hash sales, revenue sharing, token expansion',
        },
        operationalEfficiency: {
          label: 'Operational Efficiency',
          description: 'Infrastructure, operation, settlement costs',
        },
        brandValue: {
          label: 'Brand Value',
          description: 'ESG innovation, global expansion',
        },
      },
      benefits: {
        salesGrowth: {
          title: 'Sales Growth & Loyalty',
          description: 'With daily accumulated coin rewards, customers\nvoluntarily revisit and membership conversion\nrates increase.',
          features: [
            'Daily reward updates => Promote revisits',
            'Premium membership/package conversion',
            'Gamified experience of hash accumulation & level up'
          ],
        },
        newRevenueModel: {
          title: 'New Revenue Model',
          description: 'Hash product sales, mining revenue sharing,\nbrand tokens & NFTs create secondary and tertiary\nrevenue sources.',
          features: [
            'Hash power sales/resale revenue',
            'Mining revenue partial sharing structure',
            'Brand coin & NFT expansion'
          ],
        },
        costReduction: {
          title: 'Cost Reduction & Operational Efficiency',
          description: 'Start with SaaS API without hardware or\nmaintenance burden, with automated settlement\nand transparent payments.',
          features: [
            'Zero infrastructure implementation',
            'Daily automatic settlement & reporting',
            'Simple API integration with existing systems'
          ],
        },
        brandESG: {
          title: 'Brand & ESG Value',
          description: 'Strengthen eco-friendly and digital innovation\nimage, and support global expansion with\nmultilingual and multi-coin support.',
          features: [
            'ESG & innovation positioning',
            'Global customer acquisition',
            'Data-driven campaign/product planning'
          ],
        },
      },
      additionalFeatures: {
        realValue: {
          title: 'Real Value Rewards',
          description: 'Rewards are paid in actual mined coins, not points, providing high customer perceived value.',
        },
        virtuous: {
          title: 'Virtuous Cycle Structure',
          description: 'A loop is formed: Activity => Hash accumulation => Daily rewards => Revisits => Additional activity.',
        },
        easyIntegration: {
          title: 'Easy and Fast Integration',
          description: 'Simple API integration with standard systems such as shopping malls, payments, apps, and memberships.',
        },
      },
      dashboardMetrics: {
        dailyReward: 'Daily Reward',
        apiIntegration: 'API Integration',
        settlementReport: 'Settlement Report',
        dailyRewardValue: '24h',
        apiIntegrationValue: 'Simple',
        settlementReportValue: 'Auto',
      },
    },
    statistics: {
      title: 'Our Achievements Over 1 Year',
      description: 'Achievements made with our powerful technology',
      stats: {
        miner: 'Miner',
        totalHashpower: 'Total Hashpower (Mh/s)',
        distributedHashpower: 'Distributed Hashpower',
        users: 'Users',
      },
    },
    membership: {
      title: 'Membership Condition',
      description: 'Find the most suitable solution for your business through HashDam\'s product plans.',
      recommended: 'Recommended',
      features: {
        oneTimePurchase: 'One-time Purchase',
        cumulativePurchase: 'Cumulative Purchase',
        hashPower: 'HashPower',
        oneYear: '1 Year (Expected Profit)',
        twoYear: '2 Years (Expected Profit)',
        threeYear: '3 Years (Expected Profit)',
        projectCount: 'Pro API Count',
        api: 'API',
        hashWallet: 'Hash Wallet',
      },
      navigation: {
        previous: 'Previous Membership',
        next: 'Next Membership',
      },
    },
    cta: {
      title: {
        part1: 'Why implement HashReward and grow',
        part2: ' sales · customers · brand',
        part3: ' simultaneously',
      },
      description: 'Through simple consultation, we propose integration solutions tailored to your current system. You can start immediately without hardware.',
      features: [
        'Implementation diagnosis & ROI estimates',
        'API integration guide & sample code',
        'Settlement/report dashboard provision',
      ],
      form: {
        placeholders: {
          company: 'Company Name',
          name: 'Contact Person',
          email: 'Email',
          phone: 'Phone Number',
          purpose: 'Please describe your implementation purpose and questions',
        },
        validation: {
          companyMinLength: 'Company name must be at least 2 characters.',
          nameMinLength: 'Contact person name must be at least 2 characters.',
          nameInvalidFormat: 'Contact person name can only contain Korean or English characters.',
          emailInvalid: 'Please enter a valid email format.',
          phoneInvalid: 'Please enter a valid phone number format. (e.g., 010-0000-0000)',
          purposeMinLength: 'Implementation purpose must be at least 10 characters.',
        },
        privacyLabel: 'By submitting, you agree to the privacy policy.',
        submitButton: 'Request Consultation',
        submittingButton: 'Sending...',
        successMessage: 'Your consultation request has been successfully submitted. We will contact you soon.',
        errorMessage: 'An error occurred while submitting your consultation request. Please try again.',
        networkError: 'There is a network connection problem. Please check your internet connection and try again.',
      },
    },
    footer: {
      downloadNow: 'Download Now',
      license: 'License',
      about: 'About',
      features: 'Features',
      pricing: 'Pricing',
      news: 'News',
      help: 'Help',
      contact: 'Contact',
      getTheApp: 'Get the App',
      copyright: '© 2021 Landify UI Kit. All rights reserved',
    },
    site: {
      title: '"Mining Site"',
      description: 'We provide stable and transparent hashpower from professional mining facilities on Borneo Island, Malaysia.',
      bityou: {
        title: 'BITYOU',
        description: 'Over 10 years of mining facility operation in Sarawak, Borneo Island, and AS service center operation',
      },
      hashdam: {
        title: 'HashDam',
        description: 'Mining facility operation and hash reward platform',
      },
      mcom: {
        title: 'MCOM',
        description: 'Hash hosting and cryptocurrency storage services',
      },
      partnership: 'Integrated Partnership Network',
      miningCompany: {
        title: 'Mining Company',
        description: 'Legitimate mining operations with official permits from the Malaysian government',
        license: 'Official Malaysian government license holder',
        environment: 'Environmental regulation compliance and sustainable operations',
        compliance: 'Full compliance with local legal requirements',
        transparency: 'Transparent operations and regular audits',
      },
      gallery: {
        title: 'Mining Facility Gallery',
        description: 'Check out the actual mining facility photos taken during our visit',
        sibu: 'Sibu',
        miri: 'Miri',
        asCenter: 'A/S Center',
        imageLoadError: 'Image load failed',
      },
    },
    common: {
      loading: 'Loading...',
      calculatorLoading: 'Calculator loading...',
      skipToContent: 'Skip to content',
      sections: {
        about: 'Partner Introduction',
        comparison: 'Service Comparison',
        features: 'Key Features',
        asic: 'ASIC Mining',
        calculator: 'Profit Calculator',
        applications: 'Use Cases',
        business: 'Business Benefits',
        process: 'How to Use',
        products: 'Product Introduction',
        statistics: 'Statistics',
        pricing: 'Membership Plans',
        contact: 'Contact Us',
      },
    },
    seo: {
      title: 'HashDam - Cloud Mining Platform | Bitcoin Mining Service',
      description: 'HashDam is a safe and efficient cloud mining platform. We provide various cryptocurrency mining services including Bitcoin, Ethereum, and more.',
      keywords: ['cloud mining', 'bitcoin mining', 'cryptocurrency', 'HashDam', 'mining platform', 'hashpower', 'crypto rewards', 'mining rewards', 'B2B rewards', 'API integration', 'LTC', 'DOGE', 'merge mining'],
    },
  },
  ja: {
    nav: {
      about: '概要',
      features: '機能',
      calculator: '計算機',
      applications: 'アプリケーション',
      process: 'プロセス',
      products: '製品',
      pricing: '料金',
      site: 'サイト',
      signUp: 'サインアップ',
      logIn: 'ログイン',
      signIn: 'サインイン',
    },
    hero: {
      badge: '報酬は消費ではなく資産',
      title1: 'ハッシュパワーベースの新しい',
      title2: '持続可能な成長報酬',
      title3: 'プラットフォーム',
      description: 'HashDamは、ハッシュをチャージすることで毎日コインレワードを受け取る次世代報酬システムです。APIでサービスに簡単に統合でき、データは透明に検証されます。',
      getStarted: '始める',
      apiDocument: 'API文書',
      coinList: 'コイン: LTC / DOGE / BELLS / LKY / PEP / JKC / DINGO / SHIC',
      packageInfo: '1年、2年、3年パッケージ / 電気・メンテナンス込み',
      transparencyInfo: '透明なデータ、ZKP検証ロードマップ',
      comingSoon: {
        title: 'まもなく公開',
        message: 'この機能はまもなく公開されます。',
        closeButton: '閉じる',
      },
    },
    asic: {
      title: 'Hashdamとは？',
      description: 'Hashdamは、ハッシュパワーを収集・保存し、それを流し出し、コイン/報酬という新しい価値を創造するプラットフォームを意味します。\nHashdamの構成要素は、ASICマイナーを通じて生成されたハッシュパワーと、マージマイニングによる8種類以上のコインの毎日の生産です。\nこのハッシュパワーは報酬となり、顧客とパートナーの両方に新しい成長機会を提供します。',
      cards: {
        hashpower: {
          title: 'ASIC & ハッシュパワー',
          description: 'ハッシュパワー（ハッシュレート）は、ブロックチェーンでトランザクションを処理し、マイニングに必要な暗号パズルを解決するための計算能力を指します。高いハッシュパワーを持つマイナーは、トランザクションをより速く検証し、ネットワークを保護でき、結果としてより多くのブロック報酬を得ることができます。ハッシュパワーは暗号通貨のマイニング速度と効率を決定する重要な要素です。',
        },
        mergeMining: {
          title: 'マージマイニングとは？',
          description: 'マージマイニングは、1つのプルーフ・オブ・ワークで複数のブロックチェーンを同時にマイニングする方法です。例えば、ライトコイン（LTC）のマイニングと一緒に、ドージコイン（DOGE）、ベルスコイン（BELLS）、ラッキーコイン（LKY）、ペペコイン（PEP）、ジャンクコイン（JKC）、ディンゴコイン（DINGO）、シバコイン（SHIC）などを同時にマイニングでき、効率と報酬を向上させます。',
        },
        hashpowerReward: {
          title: 'ハッシュパワー報酬',
          description: 'ユーザーは特定の活動（例：会員登録、紹介活動、音楽ストリーミング、ゲームプレイ、ショッピング、運動など）を行うとハッシュパワーを報酬として受け取り、これをLTC+DOGE+BELLS+JKC+LKY+PEP+DONGO+SHICコインのマイニングと追加コインを組み合わせて報酬として提供できます。',
        },
      },
    },
    features: {
      title: 'Hashdam機能',
      description: '既存のポイントよりも強力な価値と差別化された顧客体験を提供できます。「Hashdam」があれば、顧客は単純な消費者ではなく、成長のパートナーになります。',
      items: {
        growth: {
          title: '成長可能性',
          description: '固定されたポイントではなく、ハッシュに基づいて毎日新しいコインがマイニングされます。→ 時間が経つにつれて報酬の価値が変化し成長できます',
        },
        multiCoin: {
          title: 'マルチコイン報酬',
          description: '1つのハッシュパワーで現在8種類以上のコインが同時にマイニングされます。→ 様々なコイン報酬を通じてリスクを分散し期待価値を高めます',
        },
        realAsset: {
          title: '実質資産価値',
          description: 'ハッシュでマイニングされたコインはすべて取引所に上場されています。→ 単純な積立ポイントではなく、実際の市場で取引可能な資産です',
        },
        continuousValue: {
          title: '継続的価値提供',
          description: 'ポイントの消滅や有効期限の制約がありません。→ ハッシュを保有し、マイニングは継続し、報酬も持続します。',
        },
        transparentData: {
          title: '透明なデータベース',
          description: 'リアルタイムハッシュレートとマイニングデータを確認できます。→ 顧客とパートナーは報酬の根拠を透明に検証できます。',
        },
        costEffective: {
          title: 'コスト効率システム',
          description: '毎回新しいコストを使う代わりに、企業はハッシュパワーで長期的な報酬を提供します。→ 顧客の忠誠度を高めながらマーケティングコストを効率的に管理できます。',
        },
        expandable: {
          title: '拡張可能な応用分野',
          description: 'eコマース、エンターテインメント、教育、フィンテックなど様々な産業に適用可能です。→ ハッシュ報酬は単純な報酬ではなく新しいビジネスモデルとして拡張されます',
        },
        differentiatedExperience: {
          title: '差別化された顧客体験',
          description: '一回限りの割引やポイント積立ではなく、成長する資産報酬を提供します。→ 顧客は単純な消費者ではなく投資と成長を体験する参加者になります。',
        },
        globalCompatibility: {
          title: 'グローバル互換性',
          description: 'マイニングされたコインは取引所上場を通じて国境を越えて流通と交換が可能です。→ 報酬プラットフォームをグローバル市場に拡張できます。',
        },
      },
    },
    applications: {
      title: 'アプリケーション',
      description: 'HashDamのハッシュ報酬は様々な産業とサービスに適用され、新しい価値を創造します。',
      items: {
        ecommerce: {
          title: 'eコマース&リテール',
          description: '商品購入時に単純なポイントではなくハッシュパワーを提供します。顧客は購入するたびにハッシュを積立し、時間が経つにつれてマイニングされたコインを報酬として受け取ります。ショッピングが直接投資に繋がります。',
          features: ['• 購入金額ハッシュ積立', '• 商品レビュー作成ボーナス', '• メンバーシップ等級別特典', '• 再購入顧客追加報酬'],
        },
        nftGaming: {
          title: 'NFT&ゲーム',
          description: 'ゲームアイテムとNFTをハッシュ報酬と連動させ、プレイ自体がマイニングと報酬に繋がります。ユーザーはゲーム内で資産を獲得し、価値のあるコインに変換できます。',
          features: ['• ゲームプレイハッシュ積立', '• NFT取引手数料割引', '• レアアイテム追加報酬', '• トーナメント参加特典'],
        },
        education: {
          title: '教育&コンテンツ',
          description: 'オンライン講座受講、コンテンツ購読などの学習活動にハッシュ報酬を提供します。学習が利益に繋がる新しい教育エコシステムを体験してください。',
          features: ['• 講座受講ハッシュ積立', '• 課題完了ボーナス', '• 修了証発行報酬', '• メンタリング参加特典'],
        },
        healthcare: {
          title: 'ヘルスケア&フィットネス',
          description: '運動記録、健康管理アプリ使用など健康的なライフスタイルを維持するたびにハッシュを積立します。健康管理が直接資産増殖に繋がります。',
          features: ['• 運動記録ハッシュ積立', '• 健康目標達成ボーナス', '• ウェアラブル連動報酬', '• コミュニティチャレンジ参加'],
        },
        finance: {
          title: '金融&投資',
          description: '投資アプリ使用、金融商品加入などの金融活動にハッシュ報酬を提供します。投資しながら同時にマイニング報酬まで受け取る二重収益構造です。',
          features: ['• 投資取引ハッシュ積立', '• ポートフォリオ管理ボーナス', '• 金融商品加入報酬', '• 投資教育参加特典'],
        },
        travel: {
          title: '旅行&ライフスタイル',
          description: '旅行予約、宿泊、レストラン訪問などのライフスタイル活動にハッシュ報酬を提供します。日常のすべての瞬間がマイニングと報酬の機会になります。',
          features: ['• 旅行予約ハッシュ積立', '• レビュー作成ボーナス', '• チェックイン報酬', '• ロイヤルティプログラム連動'],
        },
        social: {
          title: 'ソーシャル&コミュニティ',
          description: 'SNS活動、コミュニティ参加、コンテンツ制作などのソーシャル活動にハッシュ報酬を提供します。コミュニケーションと共有のすべての活動が価値に変換されます。',
          features: ['• 投稿ハッシュ積立', '• いいね/コメントボーナス', '• コンテンツ制作報酬', '• インフルエンサープログラム'],
        },
        mobility: {
          title: 'モビリティ&交通',
          description: '公共交通利用、カーシェアリング、配達サービスなどのモビリティサービス利用時にハッシュ報酬を提供します。移動するすべての瞬間がマイニングの機会です。',
          features: ['• 公共交通利用積立', '• カーシェアリングボーナス', '• エコフレンドリー移動報酬', '• 配達サービス割引'],
        },
        entertainment: {
          title: 'エンターテインメント&メディア',
          description: 'OTT視聴、音楽ストリーミング、ゲームなどのエンターテインメント活動にハッシュ報酬を提供します。楽しみながら同時に収益を創出する新しい体験を提供します。',
          features: ['• コンテンツ視聴ハッシュ積立', '• 購読サービスボーナス', '• レビュー作成報酬', '• プレミアム特典提供'],
        },
      },
      common: {
        mainFeatures: '主要機能',
        viewDetails: '詳細を見る',
      },
    },
    comparison: {
      title: 'リワードを変えれば、新しい機会が開かれます',
      description: {
        part1: '"Hashdam"は単純な報酬ではなく、',
        highlight1: 'ハッシュパワー基盤リワード',
        part2: 'という新しい観点を提示します。リワードに対する観点を変えると、',
        part3: '新しい',
        highlight2: '投資/成長/資産',
        part4: '機会が拡張されます。',
      },
      cards: {
        traditional: {
          title: '既存の方式：消耗される費用',
          points: [
            '既存のリワードは皮肉にも瞬間的な満足以外に顧客に価値を提供しません。',
            '時間が経つにつれて蓄積されたポイントは価値が下落したり、有効期限のリスクに直面します。',
            '結局、企業は顧客を引き付けるために無料費用のみを投資します。'
          ],
        },
        hashdam: {
          title: '新しい代案：成長する「資産」',
          points: [
            '顧客に「資産」となる資産を贈り物として提供し、真の価値を提供します。',
            '時間と共に自ら成長する累積ロックイン効果を提供します。',
            '一度の投資で流出なしに顧客マーケティングが終了します。'
          ],
        },
      },
      bottomMessage: {
        part1: '一般リワードは使用時に消滅、',
        highlight: 'ハッシュリワードは時間と共に累積増加',
        part2: 'します。',
      },
    },
    calculator: {
      title: '利益計算機',
      description: 'ハッシュ値をドラッグするとリアルタイムで予想マイニング収益が更新されます。',
      hashPowerLabel: 'ハッシュパワー(Mh/s)',
      rangeInfo: '1~10,000',
      monthlyProfitLabel: '予想月積立(合計)',
      miningStatsTitle: 'マイニング統計',
      coinDailyExampleTitle: 'コイン別日次例',
      dailyLabel: '日次',
      loadingText: '読み込み中...',
      stats: {
        hashrate24h: '24h ハッシュレート',
        reject: 'リジェクト',
        efficiency: '効率',
      },
    },
    process: {
      title: 'プロセス方法',
      description: '以下の5段階に従って簡単かつ迅速にマイニングを開始してください。各段階はサービス利用の核心的な過程を含んでいます。',
      steps: {
        signup: {
          title: '会員登録',
          description: '簡単な情報入力でサービスに加入し、すべての機能を利用する準備をします。',
        },
        purchase: {
          title: 'HashCredit購入',
          description: 'マイニングに必要なハッシュクレジットを購入します。様々な決済手段をサポートします。',
        },
        distribute: {
          title: 'HashPower分配',
          description: '購入したハッシュクレジットを希望するマイニングプールに分配し、マイニング効率を最適化します。',
        },
        mining: {
          title: 'マイニング',
          description: '分配されたハッシュパワーで自動マイニングが開始され、リアルタイムで収益を確認できます。',
        },
        withdraw: {
          title: '出金',
          description: 'マイニングされた収益をいつでも希望するウォレットに安全かつ迅速に出金できます。',
        },
      },
    },
    productPricing: {
      title: '製品',
      description: 'HashDamの製品プランを通じて、お客様のビジネスに最も適したソリューションを見つけてください。',
      plans: {
        oneYear: {
          title: '1年プラン',
          status: '人気',
          description: '短期プロジェクトに適した基本プラン',
          features: [
            '基本ハッシュパワー提供',
            '月次収益レポート',
            '24/7顧客サポート',
            '基本API統合'
          ],
          buttonText: '始める',
        },
        twoYear: {
          title: '2年プラン',
          status: '推奨',
          description: '中長期成長のためのバランスの取れたプラン',
          features: [
            '強化されたハッシュパワー',
            '週次詳細分析',
            '優先顧客サポート',
            '高度なAPI機能',
            'カスタムダッシュボード'
          ],
          buttonText: 'プランを選択',
        },
        threeYear: {
          title: '3年プラン',
          status: '最高価値',
          description: '長期投資のためのプレミアムプラン',
          features: [
            '最大ハッシュパワー',
            'リアルタイム監視',
            '専任アカウントマネージャー',
            '完全APIアクセス',
            'カスタマイズされたソリューション',
            '優先技術サポート'
          ],
          buttonText: 'お問い合わせ',
        },
        unlimited: {
          title: '無制限プラン',
          description: '大規模企業のためのカスタマイズされたソリューション',
          features: [
            '無制限ハッシュパワー',
            '完全カスタマイズ設定',
            '専用インフラ',
            '24/7専任サポート',
            '高度なセキュリティ機能',
            'グローバル拡張サポート'
          ],
          buttonText: '相談申請',
        },
      },
      bestValue: '最高価値',
    },
    businessBenefits: {
      heroTitle: '顧客はどのような利益を得ますか？',
      heroDescription: '顧客の忠誠度を保存・発展させるビジネスを通じた成長プロセス',
      mainTitle: '毎日コインが流れ込むように\nサービスを作る',
      mainDescription: 'HashRewardの単一実装で、売上、顧客、ブランドがすべて成長します。顧客がより活発になるにつれて、ハッシュパワーが蓄積され、実際のコインが毎日マイニングされ、価値ある報酬として返されます。',
      benefitsTitle: 'パートナーのためのHashRewardの4つの主要利益',
      benefitsDescription: '毎日更新されるマイニング報酬と簡単なAPI統合により、再訪問と売上が同時に促進されます。',
      whyHashRewardTitle: 'なぜHashReward？',
      dashboardNote: '★ データとUIは例であり、実際のダッシュボードとメトリクスはパートナー環境に応じて提供されます。',
      metrics: {
        loyaltyIndex: {
          label: '忠誠度指数',
          description: '月次再訪問、メンバーシップ転換',
        },
        newRevenue: {
          label: '新しい収益源',
          description: 'ハッシュ販売収益シェアトークン拡張',
        },
        operationalEfficiency: {
          label: '運営効率',
          description: 'インフラ、運営、決済コスト',
        },
        brandValue: {
          label: 'ブランド価値',
          description: 'ESG革新グローバル拡張',
        },
      },
      benefits: {
        salesGrowth: {
          title: '売上成長&忠誠度',
          description: '毎日蓄積されるコイン報酬により、顧客が\n自発的に再訪問し、メンバーシップ転換\n率が向上します。',
          features: [
            '毎日の報酬更新 => 再訪問促進',
            'プレミアムメンバーシップ/パッケージ転換',
            'ハッシュ蓄積&レベルアップのゲーミフィケーション体験'
          ],
        },
        newRevenueModel: {
          title: '新しい収益モデル',
          description: 'ハッシュ製品販売、マイニング収益シェアブランド\nトークン&NFTが二次・三次収益源を\n創出します。',
          features: [
            'ハッシュパワー販売/再販収益',
            'マイニング収益部分シェア構造',
            'ブランドコイン&NFT拡張'
          ],
        },
        costReduction: {
          title: 'コスト削減&運営効率',
          description: 'ハードウェアとメンテナンス負担なしでSaaS APIから\n開始し、自動決済と透明な\n支払いを行います。',
          features: [
            'ゼロインフラ実装',
            '毎日自動決済&レポート',
            '既存システムとの簡単なAPI統合'
          ],
        },
        brandESG: {
          title: 'ブランド&ESG価値',
          description: 'エコフレンドリーでデジタル革新\nイメージを強化し、多言語・多コイン\nサポートでグローバル拡張をサポートします。',
          features: [
            'ESG&革新ポジショニング',
            'グローバル顧客獲得',
            'データ駆動型キャンペーン/製品計画'
          ],
        },
      },
      additionalFeatures: {
        realValue: {
          title: '実質価値報酬',
          description: '報酬はポイントではなく実際にマイニングされたコインで支払われ、高い顧客認識価値を提供します。',
        },
        virtuous: {
          title: '善循環構造',
          description: 'ループが形成されます：活動 => ハッシュ蓄積 => 毎日の報酬 => 再訪問 => 追加活動。',
        },
        easyIntegration: {
          title: '簡単かつ迅速な統合',
          description: 'ショッピングモール、決済、アプリ、メンバーシップなどの標準システムとの簡単なAPI統合。',
        },
      },
      dashboardMetrics: {
        dailyReward: '毎日の報酬',
        apiIntegration: 'API統合',
        settlementReport: '決済レポート',
        dailyRewardValue: '24h',
        apiIntegrationValue: '簡単',
        settlementReportValue: '自動',
      },
    },
    statistics: {
      title: '1年間の成果',
      description: '私たちの強力な技術で成し遂げた成果です',
      stats: {
        miner: 'マイナー',
        totalHashpower: '総ハッシュパワー(Mh/s)',
        distributedHashpower: '分配されたハッシュパワー',
        users: 'ユーザー',
      },
    },
    membership: {
      title: 'メンバーシップ条件',
      description: 'HashDamの製品プランを通じて、お客様のビジネスに最も適したソリューションを見つけてください。',
      recommended: '推奨',
      features: {
        oneTimePurchase: '一回購入',
        cumulativePurchase: '累積購入',
        hashPower: 'ハッシュパワー',
        oneYear: '1年(予想収益)',
        twoYear: '2年(予想収益)',
        threeYear: '3年(予想収益)',
        projectCount: 'プロAPI数',
        api: 'API',
        hashWallet: 'ハッシュウォレット',
      },
      navigation: {
        previous: '前のメンバーシップ',
        next: '次のメンバーシップ',
      },
    },
    cta: {
      title: {
        part1: 'HashRewardを実装し、',
        part2: '売上・顧客・ブランド',
        part3: 'を同時に成長させましょう',
      },
      description: '簡単な相談を通じて、現在のシステムに合わせた統合方案を提案いたします。ハードウェアなしで即座に開始できます。',
      features: [
        '実装診断&ROI予想値提供',
        'API統合ガイド&サンプルコード',
        '決済/レポートダッシュボード提供',
      ],
      form: {
        placeholders: {
          company: '会社名',
          name: '担当者名',
          email: 'メール',
          phone: '電話番号',
          purpose: '実装目的と疑問点を書いてください',
        },
        validation: {
          companyMinLength: '会社名は最低2文字以上入力してください。',
          nameMinLength: '担当者名は最低2文字以上入力してください。',
          nameInvalidFormat: '担当者名は韓国語または英語のみ入力可能です。',
          emailInvalid: '正しいメール形式を入力してください。',
          phoneInvalid: '正しい電話番号形式を入力してください。(例: 010-0000-0000)',
          purposeMinLength: '実装目的は最低10文字以上入力してください。',
        },
        privacyLabel: '提出時に個人情報処理方針に同意したものとみなされます。',
        submitButton: '適用相談する',
        submittingButton: '送信中...',
        successMessage: '相談申請が正常に受付されました。早い時期に連絡いたします。',
        errorMessage: '相談申請中にエラーが発生しました。再度お試しください。',
        networkError: 'ネットワーク接続に問題があります。インターネット接続を確認して再度お試しください。',
      },
    },
    footer: {
      downloadNow: '今すぐダウンロード',
      license: 'ライセンス',
      about: '概要',
      features: '機能',
      pricing: '料金',
      news: 'ニュース',
      help: 'ヘルプ',
      contact: 'お問い合わせ',
      getTheApp: 'アプリを入手',
      copyright: '© 2021 Landify UI Kit. All rights reserved',
    },
    site: {
      title: '"マイニングサイト"',
      description: 'マレーシアボルネオ島の専門マイニング施設から安定した透明なハッシュパワーを提供します。',
      bityou: {
        title: 'BITYOU',
        description: 'ボルネオ島サラワクでの10年以上のマイニング施設運営およびASサービスセンター運営',
      },
      hashdam: {
        title: 'HashDam',
        description: 'マイニング施設運営とハッシュ報酬プラットフォーム',
      },
      mcom: {
        title: 'MCOM',
        description: 'ハッシュホスティングと暗号通貨ストレージサービス',
      },
      partnership: '統合パートナーシップネットワーク',
      miningCompany: {
        title: 'マイニング会社',
        description: 'マレーシア政府からの公式許可を受けた合法的なマイニング運営',
        license: 'マレーシア政府公式ライセンス保有者',
        environment: '環境規制遵守と持続可能な運営',
        compliance: '現地法務完全遵守',
        transparency: '透明な運営と定期監査',
      },
      gallery: {
        title: 'マイニング施設ギャラリー',
        description: '実際の訪問時に撮影したマイニング施設の姿を確認してください',
        sibu: 'シブ',
        miri: 'ミリ',
        asCenter: 'A/Sセンター',
        imageLoadError: '画像読み込み失敗',
      },
    },
    common: {
      loading: '読み込み中...',
      calculatorLoading: '計算機読み込み中...',
      skipToContent: 'コンテンツにスキップ',
      sections: {
        about: 'パートナー紹介',
        comparison: 'サービス比較',
        features: '主要機能',
        asic: 'ASICマイニング',
        calculator: '利益計算機',
        applications: '使用事例',
        business: 'ビジネス利益',
        process: '使用方法',
        products: '製品紹介',
        statistics: '統計情報',
        pricing: 'メンバーシップ料金',
        contact: 'お問い合わせ',
      },
    },
    seo: {
      title: 'HashDam - クラウドマイニングプラットフォーム | ビットコインマイニングサービス',
      description: 'HashDamは安全で効率的なクラウドマイニングプラットフォームです。ビットコイン、イーサリアムなど様々な暗号通貨マイニングサービスを提供します。',
      keywords: ['クラウドマイニング', 'ビットコインマイニング', '暗号通貨', 'HashDam', 'マイニングプラットフォーム', 'ハッシュパワー', '暗号報酬', 'マイニング報酬', 'B2B報酬', 'API統合', 'LTC', 'DOGE', 'マージマイニング'],
    },
  },
};
