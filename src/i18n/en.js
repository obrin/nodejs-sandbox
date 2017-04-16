var a = {
  messages: {
    format: {
      date: 'DD MMMM YYYY',
      dateTime: 'DD MMMM YYYY hh:mm',
      dateShort: 'DD MMM YY',
      price: '{currency} {price}'
    },
    general: {
      fbErrorMsg: "Looks like FB login is having some issues. It's not you, it's them! Our code monkeys are on it - until then, click below for access.",
      fbPlay: "Let's Play",
      hello: 'Oh, hello there!',
      account: 'My Account',
      start: "Let's Play",
      login: "Let's Play",
      signup: "Let's play",
      logout: 'Sign out',
      search: 'Search',
      or: 'or',
      email: 'email',
      date_of_birth: 'Date of Birth',
      terms: 'terms',
      featuredMovies: 'Featured movies',
      featuredShows: 'Featured TV shows',
      seeAll: 'See more',
      related_movies: 'Related',
      related_shows: 'Related',
      all_movies: 'All movies',
      all_tv: 'All TV series',
      movies_genre: '{genre} - Movies',
      top200Movies: 'Top 200 movies',
      tv_genre: '{genre} - TV',
      top200Shows: 'Top 200 TV shows',
      play: 'Play',
      episodes: 'Episodes',
      episode: 'Episode',
      season: 'Season',
      select_season: 'Select season',
      loading: 'Loading...',
      director: 'Director',
      directors: 'Directors',
      actors: 'Actors',
      subtitles: 'Subtitles',
      expiring: 'Expiring soon',
      remaining_time: 'mins remaining',
      lastWatched: 'Last watched',
      sortBy: 'Sort by: ',
      sorting: {
        most_popular: 'Most popular',
        highest_rated: 'Highest rated',
        a_z: 'A-Z',
        date_added: 'Date added'
      },
      unsupportedChromeVersion: 'iflix does not currently work with this version of Chrome for Mac. Please use Safari or Firefox while we work to resolve this issue.',
      unsupportedChromeHeading: 'Sorry',
      ok: 'OK',
      cancel: 'Cancel',
      apply: 'Apply',
      done: 'Done',
      yes: 'Yes',
      no: 'No',
      back: 'Back',
      submit: 'Submit',
      close: 'Close',
      free: 'Free',
      downloads: 'My downloads',
      watched: 'Watched',
      update_now: 'UPDATE NOW',
      ok_got_it: 'OK! GOT IT'
    },
    login: {
      welcome_back: 'Welcome back',
      ingress: "Login to start playing.<br/>LET'S PLAY",
      fbSignin: 'Sign in with facebook',
      forgot_password: 'Forgot password?',
      forgot_password_title: 'Forgot password',
      forgot_password_description: 'Enter your <strong>iflix</strong> username, or the email address that you used to register. We\'ll send you an email with your username and a link to reset your password.',
      new_to_us: 'Not a member yet?',
      register_interest: 'Start your free trial',
      sign_up: 'Sign up now',
      email: 'EMAIL',
      email_or_user: 'Email address or username',
      invalid_email: 'Please write a valid email-address',
      password: 'PASSWORD',
      email_sent: 'Instructions for setting a new password were successfully sent to your email',
      password_was_reset: "Good work! Your password was successfully reset. Sign in and Let's Play!",
      send: 'Send',
      rememberMe: 'Remember me',
      content_available: 'This content is available on',
      welcome_back_message: 'Just one last step and you\'ll be able to enjoy additional 30 days of iflix playtime!',
      errors: {
        'AUTHENTICATION_FAILED': "Oh no! Something's not right. Please check your email and password and try again.",
        'Missing credentials': "Oh no! A couple of things are missing. Enter your email and password to continue.",
        'FACEBOOK_MISSING_USER': "Oh no! You can't sign in if you haven't signed up. Sign up for a free trial below.",
        'FACEBOOK_SESSION_NOT_AUTHENTICATED': "Oh no! Something went wrong with our servers. Please try again later.",
        'Permissions error': "Facebook login failed - you must remember to give iflix access to your Facebook account",
        'COMMUNICATION_ERROR_GATEKEEPER': "Oh no! Something went wrong with our servers. Please try again later.",
        'unknown error': "Oh no! Something went wrong with our servers. Please try again later.",
        'MAX_REQUESTS_REACHED_FOR_USER': "Oh no! Something went wrong with our servers. Please try again later.",
        'UNABLE_TO_LOGIN': "Oh no! Something went wrong with our servers. Please try again later.",
        'INTERNAL_SERVER_ERROR': "Oh no! Something went wrong with our servers. Please try again later.",
        'reset_password_expired': 'Bummer. Your reset link has expired. Request to reset your password again <a href="/forgotpassword" >here</a>.',
        'reset_password_invalid': 'Bummer. Your reset link no longer works. Request to reset your password again <a href="/forgotpassword" >here</a>.',
        'UNKNOWN': "Oh no! Something went wrong with our servers. Please try again later."
      }
    },
    signup: {
      fbSignup: 'Sign up with facebook',
      fb_assurance: '* We don\'t post anything to Facebook',
      or_with_email: 'OR',
      emailSignup: 'Sign up with email',
      firstname: 'FIRSTNAME',
      email: 'EMAIL',
      choose_password: 'CREATE PASSWORD',
      already_have: 'Already have an account?',
      privacy_policy: 'Privacy policy',
      redeemVoucher: 'Redeem voucher',
      voucher: 'Enter voucher code',
      voucher_valid: 'Voucher is valid',
      voucher_invalid: 'Voucher is not valid',
      enter_firstname: 'Please enter your firstname',
      enter_email: 'Please enter your email.',
      invalid_email: 'The email address you supplied is invalid.',
      email_taken: "We're sorry, that email is taken.",
      username_missing: 'Please choose a username.',
      username_too_short: 'Your username is too short.',
      username_unavailable: "We're sorry, that username is not available.",
      password_missing: 'Please choose a password.',
      password_too_short: 'Your password is too short.',
      date_of_birth_missing: 'Please enter your date of birth.',
      signup_footer: "I agree",
      signup_description: "To sign up, please agree to the <strong>iflix</strong> <a href='https://iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://iflix.com/privacypolicy.html' target='_blank'>Privacy policy</a>.",
      fbSignupComplete: 'Facebook Signup Complete',
      fbRedirect: 'Thank you for signing up with Facebook. Redirecting...',
      emailSignupComplete: 'Email Signup Complete',
      emailRedirect: 'Thank you for signing up with email. Redirecting...',
      errors: {
        'AUTHENTICATION_FAILED': "Oh no! Something's not right. Please check your email and password and try again.",
        'USER_MULTIPLE_VALIDATION_ERRORS': 'Hmm, it seems like the email address or username you provided is already registered. Please log in or try another one.',
        'FACEBOOK_USER_MULTIPLE_VALIDATION_ERRORS': 'Hmm, it seems like this Facebook account or its email address is already registered. Please log in or try another one.',
        'FACEBOOK_USER_MISSING_EMAIL': "Hmm, it seems like your Facebook account doesn't have an email registered. Please add an email to your Facebook account and try again or sign up with email here.",
        'Permissions error': "Facebook signup failed - you must remember to give iflix access to your Facebook account",
        'TRIAL_ORDER_FAILED': "Hmm, it seems like your trial period failed to register for some reason.",
        'VOUCHER_ORDER_FAILED': "Hmm, it seems like your voucher code failed to register for some reason.",
        VOUCHER_CODE_USED: 'Oh no! You have already used this voucher code. Please try another code.',
        CANNOT_EXTEND_RECURRING: 'Oh no! This voucher cannot be used with your subscription.',
        'Missing credentials': 'Oh no! A couple of things are missing. Enter your email and password to continue.',
        voucherInvalid: "Sorry, your voucher has not been recognized. You can sign up at <a href='http://iflix.com'>iflix.com</a>.",
        wrong_dob_format: 'Please check your date of birth.',
        invalidEmail: 'Oh no! You did not enter a valid email address.',
        minimum_age_policy: ' Minimum age requirements to create an user is 18 years old.',
        'TRIAL_MOBILE_CHECK_FAILED': "Oh no! It seems this phone number has already been used for a free trial. Go back to the <a href='/trial'>trial page</a> and try again.",
        'NO_VOUCHER_OR_TRIAL_MOBILE': "Oh no! Something went wrong. Please try voucher-link or go back to the <a href='/trial'>trial page</a> and try again.",
        'UNKNOWN': "Oh no! Something went wrong. Please try voucher-link or go back to the <a href='/trial'>trial page</a> and try again."
      }
    },
    menu: {
      profileName: 'account',
      menu: 'Menu',
      home: 'Home',
      purchase: 'Subscribe Now',
      extendSubscription: 'Renew subscription now',
      voucher: 'Redeem Voucher',
      subscription: 'Subscription',
      movies: 'Movies',
      featured: 'Featured',
      all: 'All',
      top200: 'Top 200',
      action: 'Action',
      animation: 'Animation',
      asian: 'Asian',
      chinese: 'Chinese',
      crime: 'Crime',
      comedy: 'Comedy',
      drama: 'Drama',
      family: 'Family',
      fantasy: 'Fantasy',
      korean: 'Korean',
      malay: 'Malay',
      reality: 'Reality',
      romance: 'Romance',
      'sci-fi': 'Sci-Fi',
      thriller: 'Thriller',
      documentary: 'Documentary',
      tv: 'TV',
      kids: 'Kids',
      favorites: 'Playlist',
      support: 'Support',
      contact: 'Contact Us',
      faq: 'FAQ',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      watchHistory: 'Watch history',
      history: 'History',
      exit: 'Exit',
      feedback: 'Give feedback',
      studios: 'Studios',
      abc: 'ABC Studios on Demand',
      aniplus: 'ANIPLUS On Demand',
      beta: 'PREVIEW',
      switchProfile: 'Switch Profile',
      devices: 'Devices',
      editProfile: 'Edit Profile'
    },
    metadataIcons: {
      playlist: 'Playlist',
      share: 'Share',
      download: 'Download',
      downloading: 'Downloading',
      downloaded: 'Downloaded',
      queued: 'Queued',
      failed: 'Disconnected',
      initializing: 'Initializing',
      expires: 'Expires in {days} days',
      expiresToday: 'Expires today'
    },
    welcome: {
      joinTheMovement: 'Join the movement!',
      ingress: 'Buy 1 month of premium. Get 2 free.<br>Get a whole season of the latest video and tv on-demand free.',
      characteristics: {
        unlimited: 'Unlimited access to thousands of hours of TV shows and movies',
        noAds: 'No ads',
        devices: 'Connect up to 5 devices',
        cancel: 'Cancel anytime online'
      },
      // areYouReady:'From only <b>{concurrency} {price}</b> per month!<br>Are you ready for iflix?',
      areYouReady: 'Are you ready for iflix?',
      logInButton: 'Log in',
      signUpButton: 'Sign up',
      noCreditCard: 'No credit card required'
    },
    welcomeModal: {
      okButton: "OMG! LET'S PLAY<br/><span>(Click here to begin)</span>",
      notYetButton: "NOT YET. I'M NOT READY",
      signInButton: "SIGN INTO ANOTHER ACCOUNT",
      partnerWith: "<p>IN PARTNERSHIP<br/>WITH</p>",
      agreement: "<p class='agreement'>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.<br/></p>",
      instantAccess: "Instant access",
      noSignUpSignIn: "No sign up or sign in required",
      noExtraCharge: "No extra charge",
      cancelOnline: "Cancel online anytime",
      switchOver: "Wanna switch over to this account now? ;)",
      footer: "For more info, head to <a href='https://www.iflix.com' target='_blank'>www.iflix.com</a>"
    },
    welcomeTM: {
      title: "<span class='header'>So you're a UniFi customer?</span></span><br/><span class='body'>Then iflix is all yours, for the next <Strong>ONE YEAR</Strong>! </span><br><span class='money'>sponsored by TM (Worth RM96)</span>",
      usp1: "Instant access to thousands of TV shows, movies & more",
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
      title: "<span class='body'>Hey TrueTV customer!</span></span><br/><span class='header'>TrueTV is sponsoring your FULL ACCESS to iflix! </span>"
    },
    welcomeCELCOM: {
      title: "<span class='body'><Strong>2 months UNLIMITED ACCESS to iflix</Strong></span><br/><span class='header'>courtesy of Xpax and FIRST™ (worth RM20)</span>",
      usp1: "Instant access to thousands of TV shows, movies & more",
      usp2: "You can even download & watch offline",
      footer: "For more info, head to <a href='https://www.iflix.com/celcom' target='_blank'>www.iflix.com/celcom</a>",
      agreement: "<p class='big'>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.<br/><br/> Automatic opt-in to seamless mobile billing via your Celcom account at RM9/month after your 2 months access period. Cancel online anytime.</p>"
    },
    welcomeMAXIS: {
      title: "<span class='header'>2 months UNLIMITED ACCESS to iflix</span></span><br/><span class='body'>brought to you by Maxis & Hotlink </span><span class='money'>(Worth RM20)</span>",
      usp1: "Instant access to thousands of TV shows, movies & more",
      usp2: "You can even download & watch offline",
      agreement: "<p class='big'>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.<br/><br/> Automatic opt-in to seamless mobile billing via your Maxis account at RM10/month after your 2 months access period. Cancel online anytime.</p>",
      footer: "For more info, head to <a href='https://www.iflix.com/maxis' target='_blank'>www.iflix.com/maxis</a>"
    },
    welcomeTMH: {
      // okButton:"OMG! LET'S PLAY<br/><span>(Click here to begin)</span>",
      // title:"<span class='body'>Hey TrueMove H customer!</span><br/><br/><span class='body'>Get your 90 Days<br/><strong>UNLIMITED ACCESS to iflix,</strong></span><br/><span class='header'>sponsored by TrueMove H (worth THB 300)</span>",
      // usp1:"Instant access to thousands of TV shows, movies and more",
      // usp2:"No sign up or sign in required",
      // usp3:"Cancel online anytime",
      // agreement:"<p class='big'>By clicking the above, you agree to create an account and play by the rules stated in our ridiculously entertaining <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>.</p>",
      // footer:"<span class='big'>Normal data charges may apply.</span><br/>For more info, head to <a href='https://www.iflix.com/TrueMoveH' target='_blank'>www.iflix.com/TrueMoveH</a>",
      // signInButton:"SIGN INTO ANOTHER ACCOUNT"         // HACK until language toggle is implemented for WelcomeBox
      okButton: "อย่ารอช้า! กดรับสิทธิ์เลย",
      title: "<span class='body'>สวัสดี ชาวทรูมูฟ เอช!</span><br/><br/><span class='body'>รับสิทธิ์ดู iflix 90 วัน </span><span class='header'>(มูลค่า 300 บาท)</span><br/><span class='body'>ทรูมูฟ เอช จัดให้!</span>",
      usp1: "ไม่ต้องกรอกอะไรให้วุ่นวาย",
      usp2: "ดูซีรีส์ หนัง หลายพันเรื่อง ได้ทันที",
      usp3: "ดูได้ทุกอย่าง ไม่อั้น",
      footer: "<span class='big'>สิทธิพิเศษนี้ ไม่รวมค่าใช้บริการอินเทอร์เน็ตในทุกกรณี</span><br/>ถ้าอยากรู้อะไรเพิ่มเติม ดูที่ <a href='https://www.iflix.com/TrueMoveH' target='_blank'>www.iflix.com/TrueMoveH</a> ได้เลย",
      agreement: "<p class='big'>การกดปุ่มข้างบนนี้แปลว่าคุณยินยอมให้เราสร้างแอคเค้าท์ใหม่ให้และยอมรับ <a href='https://www.iflix.com/termsofuse.html' target='_blank'>ข้อตกลงการใช้งาน</a> และ <a href='https://www.iflix.com/privacypolicy.html' target='_blank'>นโยบายความเป็นส่วนตัว</a> ของเราที่เขียนไว้อย่างมีสไตล์</p>",
      signInButton: "เข้าใช้งานด้วยบัญชีอื่น"
    },
    home: {
      welcome: 'Welcome'
    },
    kids: {
      chooseCharacter: 'Choose a character',
      featuredMovies: 'Featured Kids movies',
      featuredShows: 'Featured Kids TV shows',
      exitConfirmation: 'Are you sure you want to exit Kids mode?'
    },
    search: {
      title_1: '1 result for <strong>{query}</strong>',
      title_n: '{num} results for <strong>{query}</strong>',
      noItems: "We couldn't find a record of <strong>{query}</strong> in our catalog.<br>Here are some popular titles you may find interesting.",
      error: "Oh no! We couldn't find a match in our catalog. Try searching again."
    },
    errors: {
      no_items_found: 'No items found',
      noEpisodesAvailable: 'No episodes available in your region',
      noEpisodesAvailableInYourParentalRange: 'This title is not available under your current parental control setting',
      noSeasons: 'No seasons available',
      sessionKicked: 'You have logged in somewhere else and will be logged out of this session.',
      sessionInvalidated: 'Your session has been invalidated - please log in again.',
      sessionTimedOut: 'Your session has timed out - please log in again.',
      streamKicked: 'You have exceeded the maximum number of concurrent streams - playback stopped.',
      unsupportedAppVersion: 'OMG! A new version is now available. Simply click the button below to update your app.',
      unsupportedAppVersion2: 'OMG! A new version is now available. Please update your app to proceed.',
      unsupportedBrowser: 'Your browser does not support this action. Please update your browser.',
      unsupportedRegionTitle: 'Unsupported region',
      unsupportedRegion: 'We apologize, but iflix is not available in your region yet.',
      partialLoadError: 'Oh no, we were unable to load more videos.',
      404: {
        title: "Eh? Where you at? - Page not found",
        message: "Sorry, but the page you are looking for is playing in a different sandpit.<br/>Head back to <a href='/'>homepage</a> or try using the Search Bar to locate it."
      },
      internalError: {
        title: "Well, this is embarrassing",
        message: "Something went wrong with the page you're trying to view. It'll be ready to play again once we fix the issue.<br/><br/>To report any technical shenanigans, say hi to the code monkeys right <a href='/feedback'>here</a>."
      },
      playbackError: {
        title: "Well, this is embarrassing",
        message: "Something went wrong with the video you're trying to watch. It'll be ready to play again once we fix the issue.<br/><br/>To report any technical shenanigans, say hi to the code monkeys on our feedback page.",
        homeButton: 'Home',
        reportButton: 'Report'
      },
      communicationError: {
        title: "You talkin' to me?",
        caption: 'Robert De Niro - Taxi Driver (1976)',
        message: "We can't get the server to talk. Refresh the page and try again. If the problem persists, say hi to the code monkeys right <a href='/feedback'>contact us</a>."
      },
      paymentError: {
        title: 'Hold on to your money just a little longer',
        message: "We were unable to complete your transaction. Try again in a bit or go back to the <a href='/payment/products'>Payment page</a> and pick a different payment method. If the problem persists, don't pull out your hair in frustration. Do contact us <a href=\"/feedback\" target=\"_blank\">here</a> and we'll try our best to assist - even if that means pulling out OUR hair!"
      },
      duplicatePurchase: {
        title: 'Hold on, wait a minute',
        message: "You already have an active subscription. But if you wanna give us extra money, we're cool with that too. <a href='/account'>Check out your subscription plan here</a>."
      },
      alreadyLoggedIn: {
        title: 'Hello again!',
        message: 'We’ve already been introduced, and you’re signed in. Press the button below and we’ll take you back home.',
        homeButton: 'Take me home!'
      },
      contentBlocked: {
        title: 'DAGNAMMIT!',
        message: "This content is blocked by Parental Controls. You can adjust access settings <a href='/account/parentalcontrol'>HERE</a>."
      },
      contentBlockedKids: {
        title: 'NO KIDS ALLOWED, BOOOOOOO :(',
        message: "This content is blocked by Parental Controls. You must ask an adult for permission (or simply be an adult) to access it."
      }
    },
    movies: {
      related: 'Related movies',
      watchTrailer: 'Watch trailer'
    },
    resetPassword: {
      pageTitle: 'Reset password',
      description: 'Create a new one. Make it cool. Then confirm it.',
      confirm: 'Confirm'
    },
    activation: {
      pageTitle: 'Activate account',
      activatedRedirecting: 'Activated, redirecting...',
      activationFailed: 'Activation failed, please contact administrator'
    },
    pendingActivation: {
      pageTitle: "You're almost there",
      pleaseActivate: "We've just sent you an email with<br/>that all-important activation link.<br/>You know the drill.<br/>Click it to activate your account",
      lost: "Didn't get an activation email?",
      sendNew: 'Send me a new one',
      mailSent: 'A new activation mail was sent to your registered email address',
      support: "If you're having trouble activating your account, please contact support@iflix.com"
    },
    account: {
      pageTitle: 'Settings',
      email: 'Email',
      name: 'Name',
      username: 'Username',
      edit: 'Edit',
      changePassword: 'Change password',
      password_is_changed: "Password changed",
      password_is_invalid: "Your old password is not correct.",
      password_validation: "Your password must be at least 6 characters long.",
      password_not_matching: "The passwords you've entered do not match. Please try again. ",
      setParentalControl: 'Set parental control',
      activeSubscription: 'My Subscription Plan',
      showFormerSubscriptions: 'Show former subscriptions',
      formerSubscriptions: 'Former subscriptions',
      getAccessNow: 'Subscribe Now',
      extendSubscription: 'Extend Subscription',
      pgSettings: 'Parental-level',
      profile: {
        pageTitle: 'Profile',
        profile: 'Profile',
        firstName: 'Firstname',
        lastName: 'Lastname',
        address: 'Address',
        zipcode: 'Zipcode',
        city: 'City',
        phone: 'Phone',
        mobilePhone: 'Phone number (eg. +60123456789)',
        globalUserPlatform: 'Region OVRD',
        updateProfile: 'Update profile',
        editProfile: 'Edit profile'
      },
      parentalControl: {
        pageTitle: 'Parental Control',
        lengthOfPin: 'Please provide a pin with at least 4 digits/letters',
        oldPinDontMatch: "The old pin is incorrect",
        savePin: 'Save pin',
        submitPin: 'Submit pin',
        changePin: 'Change pin',
        enterPassword: 'Enter your iflix password',
        password: 'Password',
        save: 'Save',
        parentDescription: "Set boundaries on what kids can and cannot watch on iflix. You're welcome.",
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
      myDevices: {
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
      subscription: {
        product: 'Product:',
        started: 'Started:',
        starts: 'Starts:',
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
    play: {
      youllSoonSee: 'You will soon get to watch {title}',
      oopsTitle: 'Sorry...',
      upgradeAccount: 'You need to subscribe in order to watch this video.',
      confirmTrial: 'You need to verify your mobile number in order to play',
      goToTrial: 'Let\'s Play!',
      goToPayment: 'Get Access Now',
      loginToAccount: 'First you have to sign in',
      notFoundOrNotPublished: 'The video is not found or it is not published',
      geoBlocked: 'The video is not available in your region',
      deviceInfoUncollectable: 'Unable to collect information about your computer or device',
      tooManyDevices: 'You have exceeded the number of allowed devices. You may register and use iflix on maximum five (5) devices',
      playerNotAvailableForMobile: "We know you're excited, but...",
      installLocalApp: "You can only play this on the iflix app",
      invalidVideoFormat: 'The video could not be played. Please contact support if the problem persists.',
      contactSupport: 'Contact Support',
      resumeOrRestart: 'Do you want to resume from {time}, or restart?',
      resume: 'Resume',
      restart: 'Restart',
      unauthorized: 'The video could not be played on this device. Please contact support if the problem persists.'
    },
    checkout: {
      title: 'Up your entertainment game and enjoy these benefits and more when you join iflix!',
      benefits: {
        unlimited: '<span  class="text text-strong text-uppercase">Unlimited</span> access to thousands of hours of TV shows & movies',
        connect: 'Connect up to 5 devices',
        noAds: 'Zero ads',
        cancel: 'Cancel online anytime'
      },
      productsMetadata: {
        annually: {
          title: '<span class="currency" style="color: #ed1c24">{currency} </span><span class="price" style="color: #ed1c24;">{monthlyPrice} </span>per month',
          subtitle: '(Paid annually, only <span class="text text-strong">{currency}{price}</span> for 12 months!)',
          banner: 'Limited time 20% off!<br>So popular, much WOW!',
          months: 12
        },
        monthly: {
          title: '<span class="currency">{currency} </span><span class="price">{monthlyPrice} </span>per month',
          subtitle: '(Paid monthly)',
          'subtitle-digi': '(Paid monthly, get <span class="text text-strong">FREE 1GB</span> monthly internet quota upon successful charging, until 31st March 2016)',
          banner: '',
          months: 1
        }
      },
      steps: {
        products: 'Step {step}: FIRST, PICK A PLAN',
        payment: 'Step {step}: NOW, PICK A PAYMENT METHOD',
        discount: 'Step {step}: GOT A MAYBANK CARD?',
        discountDescription: 'Enter the first 6 digits of your card number and get an additional 20% off',
        voucher: 'Step {step}: GOT A PROMO CODE?'
      },
      payment: {
        'payment express': 'Credit / debit card',
        revpay: 'Online banking',
        paysbuy: 'Online banking',
        override: 'Online banking',
        digi: 'Mobile Billing',
        'digi-promo': 'Mobile Billing'
      },
      enterDiscountCode: 'Enter your promo code',
      totalAmount: 'Total amount:',
      subscribe: 'Subscribe now',
      digiNo: 'NO, I am not a Digi user!',
      header: {
        digi: "Don\'t worry, You will not be charged until your sponsored full access is over."
      },
      footer: {
        standard: "By selecting any of these plans, you agree to iflix's <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='http://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>",
        digi: "We need to setup your payment first to ensure that you have uninterrupted experience. Don\'t worry. You will not be charged until your sponsored full access is over. <br /><br /> By clicking the \"SUBSCRIBE NOW!\" button, you agree to continue playtime with iflix for the duration of your subscription plan. You will be billed recurrently after the 60-day free trial."
      },
      errors: {
        unknownStep: 'Unknown step',
        noPanel: "Oh no! You expected a panel here, but all you get is <a href='/feedback'>this link</a> to contact us instead.",
        INVALID_DISCOUNT_CODE: 'The discount code is not valid'
      },
      paymentType: {
        recurring: {
          intro: 'YOU HAVE PICKED A RECURRING SUBSCRIPTION.',
          body: 'You will be automatically charged each {frequency} with zero interruptions to playtime!',
          ending: 'Changed your mind? No sweat, just head to <a href="/account">My Account</a> to cancel anytime.'
        },
        nonRecurring: {
          intro: 'YOU HAVE PICKED A NON-RECURRING SUBSCRIPTION.',
          body: 'That means manual renewals. We\'ll send you a reminder 7 days before expiry.',
          ending: 'Manual labour i.e. renewing your subscription again, and again and AGAIN not your thing? Pick an auto-recurring payment method! ;) It\'s hassle-free, PLUS you can still cancel anytime.'
        }
      }
    },
    payment: {
      title: 'How would you like to pay?',
      progress: 'Hold on a sec while we process your order...',
      completingOrder: 'Completing Order',
      redeemVoucher: 'Redeem voucher',
      voucherNotValid: 'Voucher not valid',
      unsupportedBrowser: "For now, you can only use Chrome, Safari or IE for online banking (OR use your credit card, it's easier!). We're super sorry. Also, thanks for subscribing to iflix. You rock!"
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
      validate: 'VALIDATE',
      verify: 'VERIFY',
      edit: 'edit',
      resendCode: 'RESEND CODE',
      codeSent: 'We just sent a code to your mobile number',
      enterCode: 'Please enter the code',
      lostCode: 'You\'re not receiving or lost your code?'
    },
    products: {
      title: 'Select a plan that works for you',
      selectProduct: '... No matter which plan you choose!',
      footer: "By selecting any of these plans, you agree to iflix's <a href='https://www.iflix.com/termsofuse.html' target='_blank'>Terms of Use</a> and <a href='http://www.iflix.com/privacypolicy.html' target='_blank'>Privacy Policy</a>",
      benefits: {
        unlimited: 'Unlimited access to thousands of hours of TV shows & movies',
        connect: 'Connect up to 5 devices',
        noAds: 'Zero ads',
        cancel: 'Cancel online anytime'
      },
      from: 'from',
      perMonth: 'per<br/>month',
      perYear: 'per<br/>year',
      taxIncluded: 'GST included',
      // HACK:         should be stored on the product in the DB
      percentageOff: '{num}% off',
      // HACK:         should be stored on the product in the DB
      product: {
        '3 Month': '3 Months',
        '6 Month': '6 Months',
        '14 days': '14 day trial',
        monthly: 'per month',
        annually: 'per year',
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
        MYR: 'RM',
        // HACK:            until we can get the correct currency name from the API
        PHP: 'PHP',
        // HACK:            until we can get the correct currency name from the API
        THB: 'THB',
        // HACK:            until we can get the correct currency name from the API
        IDR: 'IDR'            // HACK:until we can get the correct currency name from the API
      },
      // HACK:         since Philippines uses different name for the products
      productPHP: {
        '3 Month': '3 Months',
        '6 Month': '6 Months',
        '14 days': '14 day trial',
        monthly: 'Monthly Plan',
        annually: 'Annual Plan'
      },
      voucher: 'Have a voucher? Click here.',
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
        sun: '',
        pldt: 'Enjoy the ultimate experience with your Fibr plan, a gift to you from PLDT Home.<br/>Click on any of the three boxes above to enter your account details and avail of this gift!',
        smart: ''
      },
      partnership: 'In partnership with'
    },
    receipt: {
      title: 'Your subscription was legit',
      thanks: 'And so are you!',
      product: 'Product:',
      date: 'Date:',
      price: 'Price:',
      receiptSent: 'A receipt will be sent to your email shortly.',
      digiMessage: '(additional 30 days sponsored by Digi)'
    },
    voucherReceipt: {
      title: 'YOUR VOUCHER WAS LEGIT',
      thanks: 'And so are you!',
      product: 'Product',
      date: 'Date:',
      actionCall: 'Start watching thousands of hours of TV shows & movies now.'
    },
    gender: {
      male: 'Male',
      female: 'Female',
      gender: 'Gender',
      pleaseChoose: 'Choose gender'
    },
    language: {
      language: 'Language'
    },
    favorites: {
      empty: "You may see an empty playlist, but all we see is opportunity! Simply click on the + button (circled below) to save them to your playlist for viewing when you are ready.<br/><br/>Let's play!"
    },
    recommendations: {
      title: 'Recommended for you'
    },
    share: {
      imWatching: "I'm watching ",
      onIflix: ' on',
      email: 'Email'
    },
    trial: {
      title: 'Trial',
      enterPhone: 'Are you human? One time verification!<br/><br/>Enter your mobile number (We won’t spam you!)',
      phone: 'Include country code (eg. +60123456789)',
      code: '4-digit activation code',
      forget: "Forget my phone number,<br/>I'm sold and ready to pay",
      disclaimer: '(you can cancel online anytime)',
      enterCode: "We have sent your activation code to {phone}<br/><br/>Enter your activation code and let’s play!",
      noCode: 'No code? Oh no!',
      resend: 'Resend code',
      redirect: 'So you ARE human. Let\'s Play!',
      reenterMobile: 'Enter a different mobile number',
      daysLeft: "{days} days left of your trial. <br><a href='/payment/products'>Subscribe now (Don't worry, you'll still enjoy whatever's left of your free trial)</a>",
      daysLeft1: "1 day left of your trial. <br><a href='/payment/products'>Subscribe now (Don't worry, you'll still enjoy whatever's left of your free trial)</a>",
      expired: "Your trial has expired. <br><a href='/payment/products'>Subscribe now (Don't worry, you'll still enjoy whatever's left of your free trial)</a>",
      noSubscription: "Unfortunately, you don't have an active subscription :(&nbsp; <br><a href='/payment/products'>Subscribe now and continue to watch iflix</a>",
      noSubscriptionPriceInfo: "Unfortunately, you don't have an active subscription :(&nbsp; <br><a href='/payment/products'>Subscribe now for unlimited access at only {price} per month</a>",
      goToIflix: 'Please go to play.iflix.com using your browser to subscribe.',
      errors: {
        PHONE_EXISTS: 'Oh no! This number has been used. Try again',
        INVALID_CODE: 'Oh no! This activation code is incorrect. Try again',
        INVALID_PHONE: 'Oh no! Invalid number. Try again.',
        COM_ERROR: 'Oh no! We were unable to get a trial code for you. Please try again',
        UNABLE_TO_SKIP: 'Oh no!'
      }
    },
    subscription: {
      daysLeft: "{days} days left of your subscription. <br><a href='/payment/products'>Renew subscription now (Don't worry, you'll still enjoy whatever's left of your current subscription)</a>",
      daysLeft1: "1 day left of your subscription. <br><a href='/payment/products'>Renew subscription now (Don't worry, you'll still enjoy whatever's left of your current subscription)</a>"
    },
    verifyMobile: {
      title: 'Verify Mobile',
      enterPhone: 'Are you human? Activate your voucher<br/>using your mobile number.<br/><br/>Please include your country code.'
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
      tv: '/tv/',
      kids: '/kids/'
    },
    feedback: {
      title: 'Talk to us',
      description: "Got a burning question of the iflix kind? Got something you need to get off your chest?<br><br>Suggestions, feedback, confessions and everything in between are welcomed!<br><br>Holler and we'll get back to you by email as soon as possible.",
      sendTo: 'Send To',
      subject: 'Subject',
      subjectPlaceholder: 'What is it about?',
      message: 'Message',
      messagePlaceholder: 'What do you want to tell us?',
      submit: 'Send',
      successMessage: 'Thanks!<br><br>Your feedback has been sent to the iflix team!',
      failMessage: 'Oh no! Something went wrong sending your feedback. Please try again',
      notEmpty: 'Fields are mandatory',
      category: 'Category',
      categoryPlaceholder: 'I need help with...',
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
        about_us: 'About Us',
        media_room: 'Media Room',
        privacy_policy: 'Privacy Policy',
        terms_of_use: 'Terms of Use',
        faq: 'FAQ',
        contact_us: 'Contact Us'
      },
      copyright: 'Copyright © 2016 iflix. All Rights Reserved'
    },
    bottomNotification: 'When we say, "Wherever, whenever!" we mean it. <span class="highlight">DOWNLOAD</span> your favourite shows on your mobile or tablet and <span class="highlight">WATCH OFFLINE</span>. Get the iflix app now!'
  }
}






