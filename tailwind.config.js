/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				slideLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				slideRight: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'slide-left': 'slideLeft 1s forwards',
				'slide-right': 'slideRight 1s forwards'
			},
			boxShadow: {
				custom: '12px 12px 72px rgba(0, 0, 0, 0.25)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
			},
			fontSize: {
				8: '8px',
				9: '9px',
				10: '10px',
				12: '12px',
				13: '13px',
				14: '14px',
				15: '15px',
				16: '16px',
				18: '18px',
				20: '20px',
				22: '22px',
				24: '24px',
				25: '25px',
				26: '26px',
				28: '28px',
				30: '30px',
				32: '32px',
				35: '35px',
				36: '36px',
				40: '40px',
				44: '44px',
				45: '45px',
				46: '46px',
				48: '48px',
				52: '52px',
				54: '54px',
				55: '55px',
				60: '60px',
				64: '64px',
				72: '72px',
				75: '75px',
				80: '80px',
				90: '90px',
				96: '96px',
				97: '97px',
				100: '100px',
				110: '110px',
				116: '116px',
				120: '120px',
				125: '125px',
				136: '136px',
				148: '148px',
				150: '150px',
				161: '161px',
				180: '180px',
				200: '200px',
				300: '300px',
				85: '85px'
			},

			lineHeight: {
				100: '1',
				110: '1.1',
				120: '1.2',
				130: '1.3',
				140: '1.4',
				150: '1.5',
				160: '1.6',
				170: '32px',
				180: '28px',
				190: '30px',
				200: '200px',
				210: '93px',
				220: '136px',
				230: '85px'
			},
			colors: {
				purplevol: {
					100: '#EAE9FD',
					200: '#CECBEB',
					300: '#9992F1',
					400: '#6359E9',
					500: '#8C89B4',
					600: '#676591',
					700: '#66648D',
					800: '#3A395F',
					900: '#2F2F5C',
					1000: '#1D1D41',
					1100: '#10102D',
					1200: '#11102D'
				},
				orangeLight: '#EE9C50',
				orangeDark: '#C1913E',
				blueLight: '#32A7E2',
				blueDark: '#2E92CA',
				redLight: '#D44545',
				redDark: '#B8444A',
				greenLight: '#22B07D',
				greenDark: '#219A74'
			}
		}
	},
	plugins: []
};
