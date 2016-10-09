import MobileMenu from './modules/mobile_menu';
import RevealOnScroll from './modules/reveal';
import $ from 'jquery';

var mobileMenu = new MobileMenu(); 
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), '60%');
