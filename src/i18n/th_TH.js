import './leetcode'
import './objects'
import './experiments/observer'
// import { stack } from './data-structures/stack-queue/stack'



var a = {
  messages: {
    format: {
      date: 'DD MMMM YYYY',
      dateTime: 'DD MMMM YYYY hh:mm',
      dateShort: 'DD MMM YY',
      price: '{currency} {price}'
    },
    general: {
      fbErrorMsg:     "อั่ยย่ะ! ดูเหมือนระบบล็อกอินด้วย Facebook รวนอยู่อ่ะ ทีมงานกำลังเร่งแก้อยู่เลย ระหว่างนี้คลิ๊กลิงค์ด้านล่างนี้เพื่อเข้าใช้งานไปก่อนนะ",
      fbPlay:         "Let's Play",
      hello:          'ฮัลโหล!',
      account:        'Settings',
      start:          "Let's Play",
      login:          "Let's Play",
      signup:         "Let's play",
      logout:         'Sign out',
      search:         'ค้นหา',
      or:             'หรือ',
      email:          'อีเมล',
      date_of_birth:  'วันเดือนปีเกิด',
      terms:          'เงื่อนไข',
      featuredMovies: 'หนัง',
      featuredShows:  'รายการทีวี',
      seeAll:         'ดูเพิ่มเติม',
      related_movies: 'เราเดาว่าคุณน่าจะชอบ',
      related_shows:  'Related',
      all_movies:     'หนังทั้งหมด',
      all_tv:         'ซีรี่ส์ทั้งหมด',
      movies_genre:   '{genre} - Movies',
      top200Movies:   'Top 200',
      tv_genre:       '{genre} - TV',
      top200Shows:    'Top 200',
      play:           'เล่น',
      episodes:       'ตอน',
      episode:        'ตอน',
      season:         'ซีซั่น',
      select_season:  'เลือกซีซั่น',
      loading:        'กำลังโหลด...',
      director:       'Director',
      directors:      'Directors',
      actors:         'Actors',
      subtitles:      'Subtitles',
      expiring:       'รีบดูนะ เรื่องนี้จะหายไปวันที่',
      remaining_time: 'นาที หนังจะจบ',
      lastWatched:    'รายการที่ชมล่าสุด',
      sortBy:         'เรียงลำดับตาม: ',
      sorting: {
        most_popular:  'ความนิยม',
        highest_rated: 'คะแนนเรทติ้ง',
        a_z:           'ตัวอักษร',
        date_added:    'วันที่'
      },
      unsupportedChromeVersion: 'iflix ไม่สามารถใช้งานร่วมกับ Chrome สำหรับ Mac เวอร์ชั่นนี้ได้ กรุณาใช้ Safari หรือ Firefox และ เราจะเร่งแก้ไขให้เร็วที่สุด',
      unsupportedChromeHeading: 'ขออภัยค่ะ',
      ok:              'โอเค๊',
      cancel:          'ไม่เอาละ',
      apply:           'ยอมรับ',
      done:            'เสร็จละ',
      yes:             'Yes',
      no:              'No',
      back:            'ย้อนกลับ',
      submit:          'ยืนยัน',
      close:           'ปิด',
      free:            'ฟรี',
      downloads:       'หนังที่ดาวน์โหลด',
      watched:         'ดูไปแล้ว',
      update_now:      'UPDATE NOW',
      ok_got_it:       'OK! GOT IT'
    },
    login: {
      welcome_back:    'กลับมาแล้ว ดีใจจัง, เวลคัม แบ็ค!',
      ingress:         "ลงชื่อเข้าใช้เพื่อดูหนังโปรด<br/>LET'S PLAY",
      fbSignin:        'ลงชื่อเข้าใช้ผ่าน Facebook',
      forgot_password: 'ลืมรหัสผ่าน',
      forgot_password_title: 'ลืมรหัสผ่าน',
      forgot_password_description: 'กรอกชื่อหรืออีเมล ที่ลงทะเบียนไว้กับ <strong>iflix</strong> รอแป๊บนะ กำลังส่งลิงค์ไปให้ตั้งรหัสใหม่',
      new_to_us:       'ยังไม่เป็นสมาชิก?',
      register_interest: 'เริ่มรับสิทธิ์ทดลองใช้ฟรี',
      sign_up:         'ลงทะเบียนใหม่',
      email:           'อีเมล',
      email_or_user:   'อีเมลหรือชื่อผู้ใช้',
      invalid_email:   'อีเมลผิดหรือเปล่า ลองใหม่ซิ',
      password:        'รหัสผ่าน',
      email_sent:      'เช็คอีเมลสิ เราส่งขั้นตอนการตั้งค่ารหัสผ่านไปให้แล้วนะ',
      password_was_reset: "เก่งมาก การตั้งค่ารหัสผ่านใหม่สำเร็จ ลงชื่อเข้าใช้แล้ว แล้วมาสนุกกันได้เลย  ",
      send:            'ส่ง',
      rememberMe:      'ล็อคอินอัตโนมัติ',
      content_available:'This content is available on',
      welcome_back_message: 'Just one last step and you\'ll be able to enjoy additional 30 days of iflix playtime!',
      errors: {
        'AUTHENTICATION_FAILED': "เดี๋ยวนะ ล็อคอินไม่ได้ ลองตรวจสอบอีเมลและรหัสผ่านอีกครั้งดีมั๊ย",
        'Missing credentials':   "เดี๋ยวนะ เหมือนข้อมูลจะไม่ครบ ลองตรวจสอบอีเมลและรหัสผ่าน เพื่อทำรายการต่อ",
        'FACEBOOK_MISSING_USER': "ยังลงชื่อเข้าใช้ไม่ได้นะจ๊ะถ้ายังไม่ได้ลงทะเบียน ลงทะเบียนเพื่อรับสิทธิ์ทดลองใช้ฟรีด้านล่างนี้เลย",
        'FACEBOOK_SESSION_NOT_AUTHENTICATED': "เดี๋ยวนะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'Permissions error': " ลงทะเบียนผ่าน Facebook ไม่สำเร็จ ต้องอนุญาตให้ iflix เข้าถึงบัญชี Facebook ของคุณก่อน",
        'COMMUNICATION_ERROR_GATEKEEPER': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'unknown error': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'MAX_REQUESTS_REACHED_FOR_USER': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'UNABLE_TO_LOGIN': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'INTERNAL_SERVER_ERROR': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง",
        'reset_password_expired': 'ว้าแย่จัง ลิงค์ตั้งค่ารหัสผ่านใหม่หมดอายุแล้ว  ลองขอใหม่อีกทีนะ <a href="/forgotpassword" >here</a>.',
        'reset_password_invalid': ' ว้าแย่จัง ลิงค์ตั้งค่ารหัสผ่านใหม่ใช้ไม่ได้แล้ว  ลองขอใหม่อีกทีนะ <a href="/forgotpassword" >here</a>.',
        'UNKNOWN': "โอ้ไม่นะ เซิร์ฟเวอร์เรามีปัญหา กรุณาลองใหม่อีกครั้ง"
      }
    },
    signup: {
      fbSignup:          'ลงทะเบียนผ่าน Facebook',
      fb_assurance:      'เราสัญญาว่าจะไม่โพสต์อะไรบน Facebook ของคุณ',
      or_with_email:     'หรือ',
      emailSignup:       'ลงทะเบียนด้วย อีเมล',
      firstname:         'ชื่อ',
      email:             'อีเมล',
      choose_password:   'ตั้งรหัสผ่าน',
      already_have:      'เคยเป็นสมาชิกแล้ว?',
      privacy_policy:    'นโยบายความเป็นส่วนตัว',
      redeemVoucher:     'ใส่รหัส voucher ที่คุณมี แล้วไปสนุกกันเลย',
      voucher:           'กรอกรหัส voucher',
      voucher_valid:     'ปิ๊งป่อง รหัส voucher ถูกต้อง',
      voucher_invalid:   'กรอกรหัส voucher ผิดหรือเปล่า ลองดูใหม่อีกครั้งนะ',
      enter_firstname:   'โปรดระบุชื่อ',
      enter_email:       'โปรดระบุอีเมล',
      invalid_email:     'กรอกอีเมลผิดหรือเปล่า ลองใหม่มั๊ย',
      email_taken:       "ว้าแย่จัง ดูเหมือนอีเมลถูกใช้ลงทะเบียนไปแล้ว",
      username_missing:  'โปรดเลือกชื่อผู้ใช้',
      username_too_short:'ชื่อผู้ใช้สั้นเกินไป',
      username_unavailable: "ขออภัยค่ะ ชื่อผู้ใช้ไม่ว่าง",
      password_missing:   'รีบเกินไปมั๊ยคะ คุณลืมใส่รหัสผ่าน',
      password_too_short:'สั้นไปนะ เดี๋ยวก็โดนแฮคหรอก',
      date_of_birth_missing: 'รีบเกินไปมั๊ยคะ คุณลืมใส่วันเดือนปีเกิด',
      signup_footer: "ยอมรับเงื่อนไข",
      signup_description: "กดยอมรับเงื่อนไข <a href='https://iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> และ <a href='https://iflix.com/privacypolicy.html' target='_blank'>Privacy policy</a> ก่อนเข้า iflix นะ",
      fbSignupComplete:  'ลงทะเบียนผ่าน Facebook สำเร็จ',
      fbRedirect:        'ขอบคุณที่ลงทะเบียนผ่าน Facebook กรุณารอสักครู่...',
      emailSignupComplete: 'ลงทะเบียนด้วยอีเมลสำเร็จ',
      emailRedirect:     'ขอบคุณที่ลงทะเบียนด้วยอีเมล กรุณารอสักครู่...',
      errors: {
        'AUTHENTICATION_FAILED': "เดี๋ยวนะ ล็อคอินไม่ได้ ลองตรวจสอบอีเมลและรหัสผ่านอีกครั้งดีมั๊ย",
        'USER_MULTIPLE_VALIDATION_ERRORS': 'ดูเหมือนว่าอีเมลและชื่อผู้ใช้นี้มีคนใช้ไปแล้ว กรุณาลงชื่อเข้าใช้หรือลองใหม่อีกครั้ง',
        'FACEBOOK_USER_MULTIPLE_VALIDATION_ERRORS': 'ดูเหมือนว่าบัญชี Facebook หรืออีเมลนี้มีคนใช้ไปแล้ว  กรุณาลงชื่อเข้าใช้หรือลองใหม่อีกครั้ง',
        'FACEBOOK_USER_MISSING_EMAIL': "ดูเหมือนว่าบัญชี Facebook นี้ยังไม่มีอีเมลที่ผ่านการลงทะเบียน กรุณาเพิ่มอีเมลในบัญชี Facebook ของคุณแล้วลองใหม่อีกครั้งหรือลงทะเบียนด้วยอีเมลที่นี่ได้เลย",
        'Permissions error': "ลงทะเบียนผ่าน Facebook ไม่สำเร็จ ต้องอนุญาตให้ iflix เข้าถึงบัญชี Facebook ของคุณก่อน",
        'TRIAL_ORDER_FAILED': "ดูเหมือนว่าเกิดข้อผิดพลาดบางประการเกี่ยวกับระยะเวลาในการทดลองใช้",
        'VOUCHER_ORDER_FAILED': "ดูเหมือนว่ารหัส voucher ที่ใส่จะไม่ถูกต้อง ใจเย็นๆ ลองใหม่นะ",
        VOUCHER_CODE_USED: 'โอ้ไม่นะ! รหัส voucher นี้ถูกใช้งานไปแล้ว ลองใช้รหัสอื่นดูนะ',
        CANNOT_EXTEND_RECURRING: 'โอ้ไม่นะ! รหัสนี้ไม่สามารถใช้งานได้',
        'Missing credentials':   'แย่แล้ว เหมือนข้อมูลจะไม่ครบ กรอกอีเมลและรหัสผ่านเพื่อทำรายการต่อ',
        voucherInvalid: "ว้าแย่จัง รหัสดูไม่คุ้นเลย สมัครแบบปกติมั๊ย ลองไปลงทะเบียนที่<a href='http://iflix.com'>iflix.com</a> ดูนะ",
        wrong_dob_format: 'กรุณาตรวจสอบวันเดือนปีเกิด',
        invalidEmail: 'แย่แล้ว อีเมลที่คุณกรอกไม่ถูกต้อง',
        minimum_age_policy:' ผู้ลงทะเบียนต้องมีอายุไม่ต่ำกว่า 18 ปี ',
        'TRIAL_MOBILE_CHECK_FAILED': "แย่แล้ว ดูเหมือนว่าเบอร์นี้จะใช้สมัครทดลองใช้ฟรีไปแล้ว กลับไปที่ <a href='/trial'>trial page</a> แล้วลองใหม่อีกครั้ง ",
        'NO_VOUCHER_OR_TRIAL_MOBILE': "แย่แล้ว เกิดข้อผิดพลาดทางเทคนิค  กรุณาเข้าลิงค์ของรหัส voucher หรือกลับไปที่  <a href='/trial'>trial page</a> แล้วลองใหม่อีกครั้ง",
        'UNKNOWN': "แย่แล้ว เกิดข้อผิดพลาดทางเทคนิค  กรุณากดลิงค์ หรือ กลับไปที่  <a href='/trial'>trial page</a> แล้วลองใหม่อีกครั้ง"
      }
    },
    menu: {
      profileName: 'account',
      menu:      'Menu',
      home:      'Home',
      purchase:  'Pay now',
      extendSubscription: 'Extend Subscription',
      voucher:   'Redeem Voucher',
      subscription:  'Subscription',
      movies:    'Movies',
      featured:  'Featured',
      all:       'All',
      top200:    'Top 200',
      action:    'Action',
      animation: 'Animation',
      asian:     'Asian',
      chinese:   'Chinese',
      crime:     'Crime',
      comedy:    'Comedy',
      drama:     'Drama',
      family:    'Family',
      fantasy:   'Fantasy',
      korean:    'Korean',
      malay:     'Malay',
      reality:   'Reality',
      romance:   'Romance',
      'sci-fi':  'Sci-Fi',
      thriller:  'Thriller',
      documentary: 'Documentary',
      tv:        'TV',
      kids:      'Kids',
      favorites: 'Playlist',
      support:   'Support',
      contact:   'Contact',
      faq:       'FAQ',
      terms:     'Terms of Use',
      privacy:   'Privacy',
      watchHistory: 'Watch history',
      history:   'History',
      exit:      'Exit',
      feedback:  'Give feedback',
      studios:   'Studios',
      abc:       'ABC Studios on Demand',
      aniplus:   'ANIPLUS On Demand',
      beta:      'PREVIEW',
      switchProfile: 'Switch Profile',
      devices: 'Devices',
      editProfile: 'Edit Profile'
    },
    metadataIcons: {
      playlist: 'Playlist',
      share:    'แชร์',
      download: 'ดาวน์โหลด',
      downloading: 'Downloading',
      downloaded: 'Downloaded',
      queued: 'Queued',
      failed: 'Disconnected',
      initializing: 'Initializing',
      expires: 'Expires in {days} days',
      expiresToday: 'Expires today'
    },
    welcome: {
      joinTheMovement: ' มาอินเทรนด์ด้วยกัน!',
      ingress: 'จ่ายค่าสมาชิกแบบพรีเมี่ยม 1 เดือน ได้ฟรีอีก 2 <br>ดูซีรี่ส์ใหม่ล่าสุดทั้งซีซั่นและทีวี ออนดีมานด์ได้ฟรีๆ',
      characteristics: {
        unlimited: 'จุใจกับหนังและซีรี่ส์เรื่องโปรดกว่า 10,000 ชั่วโมง ดูได้ไม่จำกัด',
        noAds: 'ไม่มีโฆษณา',
        devices: '1 บัญชี  ใช้ได้ 5 เครื่อง',
        cancel: 'ไร้ข้อผูกมัด ยกเลิกได้ง่ายๆ'
      },
      // areYouReady: 'เพียง<b>{concurrency} {price}</b> ต่อเดือน!<br>พร้อมสนุกกับ iflix กันรึยัง',
      areYouReady: 'พร้อมสนุกกับ iflix กันรึยัง',
      logInButton: 'ลงชื่อเข้าใช้',
      signUpButton: 'ลงทะเบียน',
      noCreditCard: 'ไม่ต้องใช้บัตรเครดิต'
    },
    welcomeModal:{
      okButton: "กดเลย! LET’S PLAY!<br/><span>(กดปุ่มนี้ เพื่อเริ่มใช้สิทธิ)</span>",
      notYetButton: "NOT YET. I'M NOT READY",
      signInButton: "ลงชื่อเข้าใช้บัญชีอื่น",
      partnerWith: "<p>IN PARTNERSHIP<br/>WITH</p>",
      agreement: "เมื่อคลิกที่ปุ่มข้างบนนี้ แปลว่าคุณยอมให้สร้างแอคเค้าท์ และยอมรับกฏอันแสนจะเฮฮาที่เขียนไว้ใน <br/> <a href='https://www.iflix.com/termsofuse.html' target='_blank'>ข้อตกลงการใช้งาน</a> และ <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>นโยบายความเป็นส่วนตัว</a> ของเรา<br/>",
      instantAccess: "ไม่ต้องกรอกอะไรให้วุ่นวาย",
      noSignUpSignIn: "ดูได้เลยทันที",
      noExtraCharge: "ดูได้ทุกอย่าง ไม่มีกั๊ก",
      cancelOnline: "ดูได้ทุกอย่าง ไม่อั้น",
      switchOver: "Wanna switch over to this account now? ;)",
      footer: "ถ้าอยากรู้อะไรเพิ่มเติม ดูได้ที่ <a href='https://www.iflix.com' target='_blank'>www.iflix.com</a> ได้เลย"
    },
    welcomeTM: {
      title: "<span class='header'>So you're a UniFi customer?</span></span><br/><span class='body'>Then iflix is all yours, for the next <Strong>ONE YEAR</Strong>! </span><span class='money'>(Worth RM96)</span>",
      footer: "For more info, head to <a href='https://www.iflix.com/TM' target='_blank'>www.iflix.com/TM</a>"
    },
    welcomeSMART: {
      title: "<span class='header'>So you're a SMART customer?</span></span><br/><span class='body'>Enjoy up to 3 months iflix access on us! </span><span class='money'>(Limited time only)</span>",
      footer: "For more info, head to <a href='https://www.iflix.com/SMART' target='_blank'>www.iflix.com/SMART</a>"
    },
    welcomeDIGI: {
      title: "<span class='body'>Hey Digi customer!</span></span><br/><span class='header'>Digi is sponsoring your FULL ACCESS to iflix! </span><br/><span class='money'>Minimum 60 days for all Digi customers and up to 1 year for selected Digi plans</span>",
      footer: "For more info, head to <a href='https://digi.iflix.com' target='_blank'>digi.iflix.com</a>",
      agreement: "<p>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.<br/> Automatic opt-in to seamless billing via your Digi account at only RM10/month after the sponsored period. Cancel online anytime.</p>"
    },
    welcomeTRUETV: {
      title: "<span class='body'>สวัสดีค่ะ ท่านสมาชิก TrueTV</span></span><br/><span class='header'>TrueTV มอบสิทธิพิเศษ<br/>ชมซีรีส์และหนังจาก iflix</span>"
    },
    welcomeCELCOM: {
      title: "<span class='header'>Hey Celcom customer!</span></span><br/><span class='body'>Get your 2 months <Strong>UNLIMITED ACCESS</Strong> to iflix,</span><br/><span class='header'>sponsored by Celcom</span>",
      usp1: "Instant access to thousands of TV shows, movies & more",
      usp2: "You can even download & watch offline",
      footer: "For more info, head to <a href='https://www.iflix.com/celcom' target='_blank'>www.iflix.com/celcom</a>",
      agreement: "<p class='big'>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.<br/><br/> Automatic opt-in to seamless mobile billing via your Celcom account at only RM9/month after your 2-month access period. Cancel online anytime.</p>"
    },
    welcomeMAXIS: {
      title: "<span class='body'>Hey Maxis customer!</span></span><br/><span class='header'>Maxis is sponsoring your FULL ACCESS to iflix! </span>"
    },
    welcomeTMH: {
      okButton: "อย่ารอช้า! กดรับสิทธิ์เลย",
      title: "<span class='body'>สวัสดี ชาวทรูมูฟ เอช!</span><br/><br/><span class='body'>รับสิทธิ์ดู iflix 90 วัน </span><span class='header'>(มูลค่า 300 บาท)</span><br/><span class='body'>ทรูมูฟ เอช จัดให้!</span>",
      usp1: "ไม่ต้องกรอกอะไรให้วุ่นวาย",
      usp2: "ดูซีรีส์ หนัง หลายพันเรื่อง ได้ทันที",
      usp3: "ดูได้ทุกอย่าง ไม่อั้น",
      agreement: "<p class='big'>การกดปุ่มข้างบนนี้แปลว่าคุณยินยอมให้เราสร้างแอคเค้าท์ใหม่ให้และยอมรับ <a href='https://www.iflix.com/termsofuse.html' target='_blank'>ข้อตกลงการใช้งาน</a> และ <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>นโยบายความเป็นส่วนตัว</a> ของเราที่เขียนไว้อย่างมีสไตล์</p>",
      footer: "<span class='big'>สิทธิพิเศษนี้ ไม่รวมค่าใช้บริการอินเทอร์เน็ตในทุกกรณี</span><br/>ถ้าอยากรู้อะไรเพิ่มเติม ดูที่ <a href='https://www.iflix.com/TrueMoveH' target='_blank'>www.iflix.com/TrueMoveH</a> ได้เลย",
      signInButton: "เข้าใช้งานด้วยบัญชีอื่น"
    },
    home: {
      welcome:    'Welcome'
    },
    kids: {
      chooseCharacter:  'เลือกตัวการ์ตูน',
      featuredMovies:   'หนังสำหรับคุณหนู',
      featuredShows:    'รายการสำหรับคุณหนู',
      exitConfirmation: 'ออกจากโหมดสำหรับคุณหนู?'
    },
    search: {
      title_1: '1 ผลการค้นหา <strong>{query}</strong>',
      title_n: '{num} เรื่องที่ค้นพบสำหรับ <strong>{query}</strong>',
      noItems: "หา <strong>{query}</strong> ไม่เจออ่ะ <br> ลองดูหนังเหล่านี้สิ อาจจะตรงกับที่คุณมองหาอยู่ก็ได้",
      error:   "โอ้ไม่นะ หาไม่เจออ่ะ ลองหาใหม่อีกที"
    },
    errors: {
      no_items_found:  'ไม่พบรายกายที่หา',
      noEpisodesAvailable: 'ตอนนี้ยังดูไม่ได้นะจ๊ะ',
      noEpisodesAvailableInYourParentalRange : 'This title is not available under your current parental control setting',
      noSeasons: 'ตอนนี้ยังดูไม่ได้นะจ๊ะ',
      sessionKicked: 'มีการล็อคอินเกิน คุณถูกเด้งแล้วหล่ะ',
      sessionInvalidated: 'ไม่สามารถเข้าใช้ต่อ กรุณาเข้าสู่ระบบใหม่อีกครั้ง',
      sessionTimedOut: 'Your session has timed out - please log in again.',
      streamKicked: 'You have exceeded the maximum number of concurrent streams - playback stopped.',
      unsupportedAppVersion: 'OMG! A new version is now available. Simply click the button below to update your app.',
      unsupportedAppVersion2: 'OMG! A new version is now available. Please update your app to proceed.',
      unsupportedBrowser: 'เบราเซอร์ของคุณไม่สามารถใช้ร่วมกับเวอร์ชั่นนี้ได้ อัพเดทเบราเซอร์  แล้วกลับมาใหม่นะ ',
      unsupportedRegionTitle: 'เรื่องนี้ยังไม่พร้อมสำหรับประเทศคุณ',
      unsupportedRegion: 'ขออภัยด้วยค่ะ iflix ยังไม่เปิดให้บริการในภูมิภาคของคุณ   ',
      partialLoadError: 'โอ้ไม่นะ เราไม่สามารถโหลดวิดีโอเพิ่มได้',
      404: {
        title: "Page not found",
        message: "ขออภัยค่ะ หน้าที่คุณกำลังหาไม่อยู่ในระบบ กลับไปที่ <br/>Head back to <a href='/'>homepage</a> หรือลองใช้แถบค้นหาเพื่อให้ง่ายขึ้น"
      },
      internalError: {
        title: "ว้า แย่จัง",
        message: "เหมือนหน้าที่คุณอยากดูจะมีบางอย่างผิดพลาดอะ เดี๋ยวพอเราแก้แล้วก็จะเข้าใหม่ได้นะ ถ้าอยากจะแจ้งปัญหาทางเทคนิคอะไรแบบนี้ ก็แจ้งได้ที่ ตรง <a href=’/feedback’>นี้ </a>"
      },
      playbackError: {
        title: "เอิ่ม รู้สึกเสียหน้า",
        message: "เกิดเหตุผิดพลาดบางประการ เราจะรีบแก้ไขให้กลับมาใช้งานได้โดยเร็ว <br/><br/> อยากบอกเจ้าหน้าที่ของเราไหม ส่งมาที่หน้า feedback สิ",
        homeButton: 'กลับหน้าแรก',
        reportButton: 'แจ้งปัญหา'
      },
      communicationError: {
        title: "คุยกับอั๊วะหรอ?",
        caption: 'โรเบิร์ต เดอ นีโร - Taxi Driver (1976)',
        message: "เหมือนเราจะต่อกับเซิฟเวอร์ไม่ติดอะ ลองรีเฟรชหน้านี้ดูอีกทีนะ ถ้าไม่หาย ลองแจ้งไปที่ฝ่ายเทคนิคของเราที่ <a href='/feedback'>นี่</a>."
      },
      paymentError: {
        title: 'ใจเย็นก่อน สองมือล้วงกระเป๋า สองเท้าอย่าเพิ่งก้าวไปไหน',
        message: "การจ่ายเงินของคุณไม่สำเร็จอะ รอสักแปป แล้วลองดูอีกที หรือลองไปที่ the <a href='/payment/products'>หน้าจ่ายเงิน</a> แล้วลองเลือกจ่ายเงินด้วยวิธีอื่นดู ถ้ายังจ่ายไม่ได้อีก อย่าเพิ่งโมโหจนเขวี้ยงคีย์บอร์ดพังนะ ลองแจ้งมาที่ <a href=\"/feedback\" target=\"_blank\">นี่</a> แล้วเดี๋ยวเราจะช่วยเต็มที่เลย ไว้ถ้ามันยากจริงๆเดี๋ยวเราเขวี้ยงคีย์บอร์ดเราเอง"
      },
      duplicatePurchase: {
        title: 'คุณกำลังจะจ่ายเงินซ้ำ',
        message: "คุณจ่ายเงินในรอบนี้แล้ว เราไม่อยากเอาเปรียบคุณ งั้นเก็บไว้จ่ายรอบหน้านะ<a href='/account'> เปิดดูแพลนสำหรับการเป็นสมาชิกได้ที่นี่</a>"
      },
      alreadyLoggedIn: {
        title: 'เจอกันอีกแล้ว',
        message: 'เรารู้จักกันแล้วเนอะ คลิกปุ่มข้างล่าง แล้วมาสนุกกันเถอะ',
        homeButton: "LET'S PLAY"
      },
      contentBlocked: {
        title: 'ช้าก่อนวัยรุ่น เข้าใจนะว่าใจร้อน',
        message: "ไปขอผู้ปกครองก่อน แล้วกลับมาปลดล็อค <a href='/account/parentalcontrol'>ตรงนี้</a> เคนะ"
      },
      contentBlockedKids: {
        title: 'อ๊ะๆ เด็กๆ ห้ามดูนะจ๊ะ',
        message: 'ไปขอคุณพ่อคุณแม่ก่อน หรือไม่ก็รอจนโตแล้วค่อยดูนะจ๊ะ'
      }
    },
    movies: {
      related: 'หนังที่คุณน่าจะชอบ',
      watchTrailer: 'ชมหนังตัวอย่าง'
    },
    resetPassword:{
      pageTitle: 'ตั้งค่ารหัสผ่านใหม่',
      description: 'ตั้งค่าใหม่ เอาให้เจ๋ง แล้วกดยืนยัน',
      confirm: 'ยืนยัน'
    },
    activation:{
      pageTitle: 'เปิดใช้งาน',
      activatedRedirecting: 'เปิดใช้งานแล้ว  รอแป๊บนะ...',
      activationFailed: 'เปิดใช้งานไม่สำเร็จ กรุณาติดต่อเรา'
    },
    pendingActivation:{
      pageTitle: "อีกนิดเดียวจะเสร็จแล้ว",
      pleaseActivate: "เราเพิ่งส่งอีเมลให้คุณพร้อมแนบ<br/>ลิงค์ที่จำเป็นสำหรับการเปิดใช้งาน <br/> รู้นะว่าต้องทำยังไง <br/> เปิดลิงค์เพื่อเปิดใช้บัญชีได้เลย",
      lost: "ยังไม่ได้รับอีเมล?",
      sendNew: 'ส่งใหม่ให้หน่อยนะ',
      mailSent: 'อีเมลสำหรับการเปิดใช้ส่งไปที่อีเมลที่คุณลงทะเบียนไว้เรียบร้อย',
      support: "หากมีปัญหาเกี่ยวกับการเปิดใช้ บัญชี   กรุณาติดต่อ support@iflix.com"
    },
    account:{
      pageTitle: 'Settings',
      email: 'Email',
      name: 'Name',
      username: 'Username',
      edit: 'Edit',
      changePassword: 'Change password',
      password_is_changed: "เปลี่ยนรหัสผ่านเรียบร้อยแล้วจ้า",
      password_is_invalid: "ประเดี๋ยวนะ คุณใส่รหัสผ่านเดิมผิดหรือเปล่าจ้ะ ลองใหม่ซิ",
      password_validation: "โว้วๆๆ รหัสผ่านสั้นไปป่าว ขอยาวๆ หน่อย สัก 6 ตัวอักษรขึ้นไปเถอะนะ",
      password_not_matching: "เราให้ใส่รหัสผ่านใหม่สองครั้งกันพลาด แต่เหมือนรหัสไม่ตรงกัน ลองใหม่นะจ้ะ",
      setParentalControl: 'Set parental control',
      activeSubscription: 'My Subscription Plan',
      showFormerSubscriptions: 'Show former subscriptions',
      formerSubscriptions: 'Former subscriptions',
      getAccessNow: 'Pay now',
      extendSubscription: 'Extend Subscription',
      pgSettings: 'Parental-level',
      profile:{
        pageTitle: 'Profile',
        profile: 'Profile',
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        address: 'ที่อยู่',
        zipcode: 'รหัสไปรษณีย์',
        city: 'จังหวัด',
        phone: 'เบอร์โทรศัพท์',
        mobilePhone: 'เบอร์โทรศัพท์ (eg. +66123456789)',
        globalUserPlatform: 'Region OVRD',
        updateProfile: 'อัพเดทเลย',
        editProfile: 'แก้ไขข้อมูลส่วนตัว'
      },
      parentalControl:{
        pageTitle: 'Parental Control',
        lengthOfPin: 'Please provide a pin with at least 4 digits/letters',
        oldPinDontMatch: "รหัส Pin เดิมไม่ถูกต้องนะจ้ะ",
        savePin: 'Save pin',
        submitPin: 'Submit pin',
        changePin: 'Change pin',
        enterPassword: 'Enter your iflix password',
        password: 'Password',
        save: 'Save',
        parentDescription: "Set boundaries on what kids can and cannot watch on iflix. You're welcome." ,
        parentalControl: 'Parental Control',
        parentalChoice0: 'Little kids',
        parentalChoice1: 'Older kids',
        parentalChoice2: 'Teens',
        parentalChoice3: 'Adults',
        parentalDescChoice0: '<strong>For children of ALL ages.</strong> Themes and elements of programs under this rating are specifically designed for a very young audience, including children from ages 2-6',
        parentalDescChoice1: '<strong>For children ages 7 and up</strong>. Themes and elements of programs under this rating may include mild fantasy, violence or comedic violence. May not be suitable for very young children.',
        parentalDescChoice2: '<strong>Parents Strongly Cautioned.</strong> Contains one or more of the following: intensely suggestive dialogue, strong coarse language, intense sexual situations, or intense violence. May be unsuitable for pre-teens under the age of 14. Parental monitoring is advised.',
        parentalDescChoice3: '<strong>Restricted.</strong> Contains adult materials including hard language, tough violence, nudity within sensual scenes, drug abuse or other elements, or a combination of some of the above. <strong>Choose this rating to turn OFF Parental Controls</strong>',
        pleaseDefineAPin: 'Please define a pin',
        enterPin: 'Enter pin',
        pinNoMatch: 'You entered an incorrect pin',
        pinEmailSent: 'Your pin was sent to your email',
        pinEmailFailed: 'Your pin could not be sent to your email. Please try again.',
        cancel: 'Cancel',
        oldPin: 'Old pin',
        newPin: 'New pin',
        confirmPin: 'Confirm pin',
        pinAndConfirmDontMatch: 'Your confirmation pin and your new pin does not match',
        forgotPin: 'Forgot pin',
        noPropertyExist: 'User dont have the iflix-parental-pin property registered, please contact an admin',
        yourPinIs: 'Your pin is'
      },
      myDevices:{
        myDevices: 'My devices',
        notAllowed: 'You are not allowed to delete a device at this time',
        fiveDevices: 'You may register and use iflix on maximum five (5) devices',
        devicesInUse: 'Devices in use',
        administerDevices: 'Administer devices',
        goBack: 'Go back',
        description1: 'Did you know that you can connect up to FIVE registered devices to your account? No way! WAY. Manage those 5 devices here.',
        description2: '- Stream up to two devices at one time.',
        description3: '- Your devices will be automatically registered when playing content.',
        description4: '- You can also change one registered device every 30 days.',
        description5: "Let's play!",
        areYouSureYouWantToRemoveThis: 'Are you sure that you want to remove this device?',
        ok: 'Ok',
        cancel: 'Cancel'
      },
      subscription:{
        product: 'Product:',
        started: 'Started:',
        starts:  'Starts:',
        expired: 'Expired:',
        expires: 'Expires:',
        renewal: 'Next Renewal:',
        lastPayment: 'Last Payment:',
        nextPayment: 'Next Payment:',
        type: 'Type:',
        types: {
          trial: 'Trial',
          voucher: 'Voucher',
          single: 'Subscription',
          recurring: 'Recurring subscription'
        },
        price: 'Price:',
        terminate: 'Stop auto-renewal subscription',
        terminateMessage: 'ARE YOU SURE? This will stop your recurring payment! (But not your subscription yay)',
        emptyText: 'Bad news! You do not have an active subscription :(',
        nonRecurringPlan: 'You are currently on {productName} ({productType}).<br><br>Your playtime ends on {date}.',
        futureRecurring: 'You are currently on {productName} ({productType}).<br><br>Guess what? You have also subscribed to {recurringName}. This is an auto-renewal subscription. Your subscription will be err, auto-renewed on {date} at {price} with zero interruptions to playtime!',
        recurringPlan: 'You are currently subscribed to {productName}.<br><br>This is an auto-renewal subscription. Your subscription will be err, auto-renewed on {date} at {price} with zero interruptions to playtime!'
      }
    },
    play:{
      youllSoonSee: 'อดใจรอแป๊ป เดี๋ยวได้ดู {title}',
      oopsTitle: 'ขออภัย....',
      upgradeAccount: 'ต้องสมัครสมาชิกก่อนนะถึงจะสามารถดูเรื่องนี้ได้',
      confirmTrial: 'อ๊ะ ก่อนจะสนุกกับเรา ต้องยืนยันเบอร์มือถือก่อนนะ',
      goToPayment: 'สมัครเดี๋ยวนี้',
      goToTrial: 'Let\'s Play!',
      loginToAccount: 'ก่อนอื่นต้องลงทะเบียนเข้าใช้',
      notFoundOrNotPublished: 'วิดีโอนี้ยังไม่มีหรือยังไม่ได้อัพโหลด',
      geoBlocked: 'วิดีโอนี้จำกัดการรับชมในเฉพาะบางประเทศ',
      deviceInfoUncollectable: '  ไม่สามารถเชื่อมต่อข้อมูลกับอุปกรณ์และคอมพิวเตอร์ของคุณ',
      tooManyDevices: 'ใช้อุปกรณ์เกินจำนวนที่จำกัด เมื่อลงทะเบียนเสร็จจะสามารถใช้งาน iflix ได้ไม่เกิน 5 เครื่องต่อ 1 สมาชิกเท่านั้น',
      playerNotAvailableForMobile: "เข้าใจว่าตื่นเต้น แต่แบบ...",
      installLocalApp: " ต้องดาวน์โหลดแอพลิเคชั่นของ iflix ลงในโทรศัพท์ก่อนถึงจะใช้งานได้",
      invalidVideoFormat: 'หนังเรื่องนี้เปิดไม่ได้ ติดต่อฝ่ายช่วยเหลือและสนับสนุนลูกค้าถ้าปัญหายังแก้ไม่ตก',
      contactSupport: ' ติดต่อฝ่ายช่วยเหลือและสนับสนุนลูกค้า',
      resumeOrRestart: 'ดูต่อจาก ที่ดูค้างไว้ นาทีที่ {time}  หรือดูใหม่ตั้งแต่ต้น',
      resume: 'ดูต่อ',
      restart: 'ดูใหม่ตั้งแต่ต้น',
      unauthorized: 'หนังเรื่องนี้ไม่สามารถดูบนอุปกรณ์นี้ได้ ติดต่อฝ่ายช่วยเหลือและสนับสนุนลูกค้าถ้าปัญหายังแก้ไม่ตก  '
    },
    checkout: {
      title: 'เต็มอิ่ม กับอรรถรสความบันเทิง ที่เราให้คุณมากกว่าใคร',
      benefits: {
        unlimited: '<span class="text text-strong text-uppercase">จุใจ</span> กับหนังและซีรี่ส์เรื่องโปรดกว่าหลายหมื่นชั่วโมง ดูได้ไม่จำกัด',
        connect: '1 บัญชี  ใช้ได้ 5 เครื่อง',
        noAds: 'ไม่มีโฆษณา',
        cancel: 'ไร้ข้อผูกมัด ยกเลิกได้ง่ายๆ'
      },
      productsMetadata: {
        annually : {
          title: '<span class="currency">{currency} </span><span class="price">{monthlyPrice} </span>per month',
          subtitle: '(จ่ายรายปี เพียง  <span style="color: black; font-family: SourceSansPro-Bold, Arial, sans-serif">{currency}{price}</span> เท่านั้น)',
          banner: 'สมัครรายปีสิ <br/>ถูกกว่าตั้ง 17% แหน่ะ!',
          months: 12
        },
        monthly : {
          title: '<span class="currency">{currency} </span><span class="price">{monthlyPrice} </span>per month',
          subtitle: '(จ่ายรายเดือน)',
          'subtitle-digi': '(Paid monthly, get <span class="text text-strong">FREE 1GB</span> monthly internet quota upon successful charging, until 31st March 2016)',
          banner: '',
          months: 1
        },
        '2 Year' : {
          title: '<span class="currency">{currency} </span><span class="price">{monthlyPrice} </span>ต่อเดือน',
          subtitle: 'ซื้อ 12 เดือนแถมอีก 12 เพียง <span class="text text-strong">{currency}{price}</span> เท่านั้น!',
          banner: '12.12 สุดพิเศษ<br>วันนี้วันเดียวเท่านั้น!<br>(ลด 58% แน่ะ)',
          months: 24
        }
      },
      steps: {
        products: 'ขั้นตอนที่ {step} เลือกแพลนที่ต้องการ',
        payment:  'ขั้นตอนที่ {step} เลือกวิธีการชำระเงิน',
        discount: 'ขั้นตอนที่ {step} ใส่รหัสส่วนลดที่คุณมี',
        discountDescription : '',
        voucher:  'ขั้นตอนที่ {step} มีโค้ดส่วนลดรึเปล่า?'
      },
      payment: {
        'payment express': 'บัตรเครดิต / บัตรเดบิต',
        revpay: 'ออนไลน์ แบงค์กิ้ง',
        paysbuy: 'ออนไลน์ แบงค์กิ้ง',
        override: 'ออนไลน์ แบงค์กิ้ง',
        digi: 'Mobile Billing',
        'digi-promo': 'Mobile Billing'
      },
      enterDiscountCode: 'ใส่โค้ดส่วนลดตรงนี้เลย',
      totalAmount: 'ยอดชำระรวม:',
      subscribe: 'ยืนยันการสมัครสมาชิก กดเลย!',
      digiNo: 'NO, I am not a Digi user!',
      header: {
        digi: "Don\'t worry, You will not be charged until your sponsored full access is over."
      },
      footer: {
        standard: "ถ้าคุณเลือกเรา ก็เท่ากับยอมรับข้อตกลง <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> กับ <a href='http://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a> แล้วนะจ๊ะ",
        digi: "We need to setup your payment first to ensure that you have uninterrupted experience. Don\'t worry. You will not be charged until your sponsored full" +
        " access is over. <br /><br />" +
        " By clicking the \"SUBSCRIBE NOW!\" button, you agree to continue playtime with iflix for the duration of your subscription plan. You will be" +
        " billed recurrently after the 60-day free trial."
      },
      errors: {
        unknownStep: 'Unknown step',
        noPanel: 'โอะ กำลังจะจ่ายเงินให้เราอยู่ใช่มั้ย ตอนนี้น่าจะมีปัญหาบางอย่าง แต่ลองกดมาตรง<a href="/feedback">ลิงค์นี้</a>แล้วแจ้งปัญหาให้เรารู้ เดี๋ยวเราจะจัดการให้',
        INVALID_DISCOUNT_CODE: 'รหัสส่วนลดนี้ดูไม่คุ้นเลยนะ'
      },
      paymentType: {
        recurring: {
          intro: 'คุณเลือกสมัครสมาชิกรายเดือนแบบต่ออายุอัตโนมัติค่ะ ',
          body: 'เท่านี้คุณก็จะได้ใช้งาน iflix ได้แบบดูลื่น ดูสบาย ไร้กังวล! ระบบจะคิดเงินให้อัตโนมัติไม่ต้องมานั่งกลัวว่าจะลืมจ่าย',
          ending: 'อ๊ะๆ ไม่ต้องกังวลาถ้าเกิดอยากเปลี่ยนใจขึ้นมา ไม่เป็นไรค่ะ แค่ไปที่ My Account (บัญชีของฉัน) แล้วทำการยกเลิกได้ทุกเมื่อเลย (แต่คุณคงไม่ยกเลิกง่ายๆ หรอกเนอะ จุ๊บๆ)'
        },
        nonRecurring: {
          intro: 'คุณเลือกสมัครสมาชิกแบบไม่ต่ออายุอัตโนมัติค่ะ ',
          body: 'การสมัครสมาชิกแบบนี้ เมื่อหมดอายุก็ต้องทำการชำระเงินเข้าใหม่นะจ้ะ อ๊ะๆ แต่ไม่ต้องกลัวลืมนะ เราจะกระซิบบอกคุณ 7 วันก่อนถึงวันหมดอายุค่ะ',
          ending: 'ในกรณีที่คุณเลือกจ่ายแบบรายเดือน จะมานั่งกดชำระเงินกันเดือนต่อเดือนคงไม่สนุกใช่ไหมคะ? ลองเลือกสมัครสมาชิกแบบต่ออายุอัตโนมัติ เท่านี้ก็ได้อยู่กับเรานานๆ แถมอยากจะยกเลิกตอนไหนก็ได้ด้วยนะ<br/><br/>ป.ล. ถ้าใช้บัตรเดบิตอย่าลืมสมัครบริการช้อปปิ้งออนไลน์ก่อนนิ เดี๋ยวจะหน้าแตก ทำยังไงถามทางธนาคารได้เลย'
        }
      }
    },
    payment: {
      title: 'ต้องการจ่ายผ่านช่องทางไหนเลือกเลย',
      progress: 'รอแป๊บนะ กำลังประมวลผล',
      completingOrder: 'เสร็จสิ้นขั้นตอนการสั่งซื้อ',
      redeemVoucher: 'ใส่รหัส voucher',
      voucherNotValid: 'รหัสนี้ ไม่สามารถใช้งานได้',
      unsupportedBrowser: "สำหรับตอนนี้ ในการทำธุรกรรมทางธนาคารสามารถเชื่อมผ่าน Chrome, Safari หรือ IE เท่านั้น (จ่ายผ่านบัตรเครดิตง่ายกว่ากันเยอะ) ขออภัยอย่างแรงค่ะ แต่ก็ขอบคุณมากนะที่ใช้ iflix เจ๋งสุดๆ รู้ตัวปะเนี่ย"
    },
    paymentMethod: {
      cashPickup: {
        subTitle: 'That\'s right! We will come collect from you, anywhere in the Klang Valley at no extra charge!',
        numberQuery: 'Would you like to use a different number?',
        pickupDetails: 'Pick ups will take place between <strong>9.30 am</strong> to <strong>6.00 pm</strong> on <strong>Monday to Friday,</strong> and <strong>9.30 am</strong> to <strong>1.30 pm</strong> on <strong>Saturdays</strong>'
      }
    },
    codeVerification: {
      mobileNumber: "Mobile Number<span class='req'>*</span>",
      mobileExample: 'e.g. 0123456789',
      error: {
        enterMobile: 'Please enter a valid mobile number',
        invalidDigi: 'Well, this is awkward. But your number is not registered with Digi.',
        invalidCode: 'Check and try entering again',
        invalidCodeMatch: 'Hmm, that\'s weird. The code is incorrect.',
        inputRequired: 'Oops! Fill in the empty field to continue.'
      },
      validate: 'ยืนยัน',
      verify: 'VERIFY',
      edit: 'edit',
      resendCode: 'RESEND CODE',
      codeSent: 'We just sent a code to your mobile number',
      enterCode: 'Please enter the code',
      lostCode: 'You\'re not receiving or lost your code?'
    },
    products: {
      title: 'เลือกแผนทางการจ่ายเงินที่ทำให้ชีวิตคุณง่ายขึ้น',
      selectProduct: '... เลือกได้ตามสั่งไม่ว่าจะแผนไหน',
      footer: "เมื่อตกลงใจเลือกแผนการจัดการทางเงินของคุณได้แล้ว แสดงว่าคุณยอมรับ <a href='https://www.iflix.com/termsofuse.html' target='_blank'> เงื่อนไขการใช้งานและ<a href='http://www.iflix.com/privacypolicy.html' target='_blank'> นโยบายความเป็นส่วนตัวของ iflix",
      benefits: {
        unlimited: 'จุใจ กับหนังและซีรี่ส์เรื่องโปรดกว่าหลายหมื่นชั่วโมง ดูได้ไม่จำกัด',
        connect: '1 บัญชี  ใช้ได้ 5 เครื่อง',
        noAds: 'ไม่มีโฆษณา',
        cancel: 'ไร้ข้อผูกมัด ยกเลิกได้ง่ายๆ'
      },
      from: 'from',
      perMonth: 'ต่อ<br/>เดือน',
      perYear: 'ต่อ<br/>ปี',
      taxIncluded: 'รวม VAT แล้ว', // HACK: should be stored on the product in the DB
      percentageOff: 'ลด {num}%', // HACK: should be stored on the product in the DB
      product: {
        '3 Month': '3 เดือน',
        '6 Month': '6 เดือน',
        '14 days': 'ทดลองใช้ 14 วัน',
        monthly: 'ต่อเดือน', // was "Monthly"
        annually: 'การจ่ายแบบรายปี', // HACK: Paymentplan.name should be changed on the product in the DB (was "Annual")

        'annually subscription': 'per month',
        month: 'per month',
        'Broadband Users': 'Broadband Users',
        'Postpaid Users': 'Postpaid Users',
        'Prepaid Users': 'Prepaid Users',
        'Infinity Users': 'Infinity Users',
        'Bro Users': 'Bro Users',
        Telpad: 'TELPAD/TVOLUTION',
        Ultera: 'Ultera',
        DSL: 'DSL',
        MYR: 'RM', // HACK: until we can get the correct currency name from the API
        PHP: 'PHP', // HACK: until we can get the correct currency name from the API
        THB: 'THB', // HACK: until we can get the correct currency name from the API
        IDR: 'IDR' // HACK: until we can get the correct currency name from the API
      },
      // HACK: since Philippines uses different name for the products
      productPHP: {
        '3 Month': '3 Months',
        '6 Month': '6 Months',
        '14 days': '14 day trial',
        monthly: 'Monthly Plan',
        annually: 'Annual Plan'
      },
      voucher: 'มีรหัส voucher กดตรงนี้เลย',
      specialOffers: 'For customers of PLDT / SMART / SUN,<br/>we have a better deal for you'
    },
    specialOffers: {
      title: 'Select a plan that works for you:',
      intros: {
        sun: "Great news for all our SUN subscribers!<br/>We are offering you iflix for the best rate in town:",
        pldt: 'Great news for all our PLDT subscribers!<br/>If you are a Ultera, DSL or Telpad subscribers, we are offering you iflix for the best rate in town:',
        smart: "Great news for all our SMART subscribers!<br/>We are offering you iflix for the best rate in town:"
      },
      description: {
        sun:  '',
        pldt: 'Enjoy the ultimate experience with your Fibr plan, a gift to you from PLDT Home.<br/>Click on any of the three boxes above to enter your account details and avail of this gift!',
        smart: ''
      },
      partnership: 'In partnership with'
    },
    receipt: {
      title: 'การชำระเงินของคุณเรียบร้อยแล้ว',
      thanks: 'คุณล่ะพร้อมหรือยัง',
      product: 'Product:',
      date: 'Date:',
      price: 'Price:',
      receiptSent: 'รายละเอียดการชำระเงิน จะถูกส่งไปให้ทางอีเมลเร็วๆ นี้',
      digiMessage: '(additional 30 days sponsored by Digi)'
    },
    voucherReceipt: {
      title: 'การใส่รหัส voucher เพื่อรับชม iflix เสร็จสิ้นแล้ว',
      thanks: 'คุณก็เป็นสมาชิกของเราแล้ว',
      product: 'Product',
      date: 'Date:',
      actionCall: 'เริ่มรับชมหนังและซีรี่ส์เรื่องโปรดกว่า 10,000 ชั่วโมง กันได้เลย'
    },
    gender:{
      male: 'ชาย',
      female: 'หญิง',
      gender: 'เพศ',
      pleaseChoose: 'โปรดระบุ'
    },
    language:{
      language: 'ภาษา'
    },
    favorites: {
      empty: "เพลย์ลิสท์ยังว่างฉกฉวยโอกาสให้เต็มที่ ง่ายๆ ถ้าอยากมีเพลย์ลิสท์เป็นของตัวเอง เลือกปุ่ม + เพื่อบันทึกรายการหรือหนังโปรดเอาไว้ดูยามว่าง <br/><br/>Let's play!"
    },
    recommendations: {
      title: 'แนะนำสำหรับคุณ'
    },
    share:{
      imWatching: "I'm watching ",
      onIflix: ' on',
      email: 'Email'
    },
    trial: {
      title:       'ทดลองใช้',
      enterPhone:  'ก่อนจะดู ช่วยยืนยันอะไรนิดนึง (ครั้งเดียวเท่านั้น)',
      phone:       'ใส่รหัสประเทศด้วยเน๊อะ (เช่น  +66812345678)',
      code:        'รหัส 4 ตัวที่ได้รับ',
      forget:      "ลืมเบอร์ <br/> จ่ายค่าสมาชิกเลยดีกว่า",
      disclaimer:  'ยกเลิกได้ง่ายๆ ไร้ข้อผูกมัด',
      enterCode:   "ส่งรหัสให้แล้วนะ ที่เบอร์ {phone}<br/><br/>กรอกรหัสเปิดใช้งาน แล้วไปสนุกกันเลย!",
      noCode:      'อั๊ยย่ะ! ยังไม่ได้รหัสเหรอ?',
      resend:      'ขอรหัสอีกครั้งเถอะนะ',
      redirect:    'ยืนยันเรียบร้อย Let\'s Play!',
      reenterMobile: 'ขอกรอกเบอร์ใหม่อีกรอบ',
      daysLeft:    "เหลือเวลาในการทดลองใช้ {days} วัน. <br><a href='/payment/products'>ชำระเงินเพื่อรับชม iflix ต่อ</a>",
      daysLeft1:   "เหลือเวลาในการทดลองใช้ 1 วัน <br><a href='/payment/products'>ชำระเงินเพื่อรับชม iflix ต่อ</a>",
      expired:     "หมดเวลาทดลองใช้แล้วจ้า <br><a href='/payment/products'>ชำระเงินเพื่อรับชม iflix ต่อ</a>",
      noSubscription: "ว้าแย่จัง คุณยังไม่ได้ชำระค่าสมาชิก(&nbsp; <br><a href='/payment/products'>ชำระเงินเพื่อรับชม iflix ต่อ</a>",
      noSubscriptionPriceInfo: "Unfortunately, you don't have an active subscription :(&nbsp; <br><a href='/payment/products'>Subscribe now for unlimited access at only {price} per month</a>",
      goToIflix:   'กรุณาไปที่ play.iflix.com เพื่อสมัครสมาชิก',
      errors: {
        PHONE_EXISTS:   'โอ๊ะโอ! เบอร์นี้ใช้ลงทะเบียนไปแล้ว ลองอีกทีนะ',
        INVALID_CODE:   'โอ๊ะโอ! รหัสเปิดใช้งาน iflix ไม่ถูกต้อง ลองอีกทีนะ',
        INVALID_PHONE:  'โอ๊ะโอ! เบอร์ไม่ถูกต้อง ลองอีกทีนะ',
        COM_ERROR:      'โอ้ไม่นะ ไม่สามารถส่งรหัสทดลองใช้ให้ได้ ณ ตอนนี้ ลองใหม่อีกทีนะ',
        UNABLE_TO_SKIP: 'โอ้ไม่นะ'
      }
    },
    subscription: {
      daysLeft: "อายุสมาชิกของคุณเหลือแค่ {days} วัน<br><a href='/payment/products'>ต่ออายุสมาชิกเลยดีกว่า (ถ้ายังไม่ต่ออายุสมาชิก ก็ยังดูหนังสนุกๆ ได้จนกว่าจะอายุสมาชิกจะหมดลงนะจ้ะ)</a>",
      daysLeft1:   "เหวอ... อายุสมาชิกของคุณเหลือแค่เพียงวันเดียว  <br><a href='/payment/products'>ต่ออายุสมาชิกด่วนเลย (ถ้ายังไม่สะดวกต่ออายุจริงๆ สนุกกับ iflix ได้แค่ภายในวันนี้นะจ้ะ)</a>"
    },
    verifyMobile: {
      title:       'ตรวจสอบหมายเลขของคุณ',
      enterPhone:  'อยากใช้แล้วใช่ไหม <br/>ใส่หมายเลขโทรศัพท์เลย<br/><br/>อย่าลืมใส่รหัสประเทศด้วย (+66)'
    },
    shops: {
      android: {
        text: "Let's play",
        url: 'https://play.google.com/store/apps/details?id=iflix.play&hl=en'
      },
      ios: {
        text: "Let's play",
        url: 'https://itunes.apple.com/app/iflix/id978324217?mt=8'
      }
    },
    urls: {
      movies: '/movies/',
      tv:     '/tv/',
      kids:   '/kids/'
    },
    feedback: {
      title:  'คุยกับเรา',
      description: "  มีอะไรข้องใจเกี่ยวกับบริการของ iflix เก็บไว้ก็หนักอก <br><br> ส่งคำแนะนำ ฟีดแบ็ค หรืออะไรก็ตามแต่ที่อยากพูดเราพร้อมรับฟัง <br><br>ถามมา ตอบไปแบบทันควัน",
      sendTo: 'Send to',
      subject: 'หัวเรื่อง',
      subjectPlaceholder: 'เกี่ยวกับ',
      message: 'ข้อความ',
      messagePlaceholder: 'บอกมาเลยว่าคิดยังไง',
      submit: 'ส่ง',
      successMessage: 'ขอบพระคุณอย่างสูง !<br><br> ข้อความถูกส่งไปที่ทีมงาน iflix เรียบร้อย',
      failMessage: 'แย่แล้ว  เกิดเหตุผิดพลาดทางเทคนิคในระหว่างส่งฟีดแบ็ค ลองใหม่อีกทีนะ',
      notEmpty: 'ข้อมูลนี้สำคัญนะ รบกวนกรอกข้อมูลหน่อยเถอะ',
      category: 'Category',
      categoryPlaceholder: 'อยากกระซิบบอกเราว่า...',
      categories: {
        general: 'General',
        content: 'Content',
        technical: 'Technical',
        payments: 'Payments'
      }
    },
    welcomeBack: {
      title: 'Welcome Back',
      and: 'AND...',
      header: 'WE\'RE TOGETHER AGAIN!',
      content: 'GLAD TO HAVE YOU BACK. WE\'VE ADDED LOADS OF NEW TV SHOWS & MOVIES FOR YOU TO BINGE WATCH.',
      footer: 'YOU READY?',
      start: 'LET\'S PLAY!'
    },
    footer: {
      shortlinks: {
        about_us :      'เกี่ยวกับเรา',
        media_room:     'ข่าวสาร',
        privacy_policy: 'นโยบายส่วนบุคคล',
        terms_of_use:   'ข้อตกลงการใช้งาน',
        faq:            'คำถามที่พบบ่อย',
        contact_us :    'ติดต่อเรา'
      },
      copyright: 'สงวนลิขสิทธิ์ตามกฎหมายบริษัท ไอฟลิกซ์ ประเทศไทย'
    },
    bottomNotification: 'เวลาเราบอกว่า "ดูที่ไหน เมื่อไรก็ได้" เนี่ย เราพูดจริงทำจริงนะ ดาวน์โหลดซีรีส์หรือหนังสุดโปรดของคุณเก็บไว้ดูบนมือถือหรือแท็บเล็ต ตอนที่คุณไม่มีเน็ตได้แล้ววันน้ี กับฟังก์ชั่น <span class="highlight">ดาวน์โหลดเพื่อดูออฟไลน์</span> อยากดูก็โหลด iflix app เลย!'
  }
};


import fs from 'fs'
var b = JSON.stringify(a, 0, 2)

fs.writeFileSync('i18n/th_TH.json', b, 'utf8')








