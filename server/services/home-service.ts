export const HomeService = {
  getHomeConfiguration: (userId: string) => {
    const hour = new Date().getHours();
    let greeting = "Good evening";
    if (hour < 12) greeting = "Good morning";
    else if (hour < 17) greeting = "Good afternoon";

    // Simulate context-aware backend providing dynamic UI configuration
    return {
      greeting,
      quick_actions: [
        { label: 'Mobile', path: '/pay-mobile', icon: 'smartphone' },
        { label: 'Contact', path: '/pay-contact', icon: 'user' },
        { label: 'Bank', path: '/bank-transfer', icon: 'building' },
        { label: 'My QR', path: '/profile/my-qr', icon: 'qr' },
        { label: 'UPI Lite', path: '/home', icon: 'zap' }
      ],
      sections: [
        {
          type: 'scan_pay',
          priority: 100
        },
        {
          type: 'upcoming_bill',
          priority: 95,
          payload: {
            biller: 'BESCOM',
            amount: 1842,
            dueDate: new Date(Date.now() + 86400000).toISOString(),
            dueInDays: 1,
            icon: '⚡',
            color: '#F5A623'
          }
        },
        {
          type: 'reward_banner',
          priority: 90,
          payload: {
            earnedThisMonth: 247
          }
        },
        {
          type: 'travel_offer',
          priority: 60,
          payload: {
            title: 'Flights to Delhi',
            price: 5180,
            image: 'airplane'
          }
        }
      ]
    };
  }
};
