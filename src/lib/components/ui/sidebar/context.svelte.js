import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
import { getContext, setContext } from "svelte";
import { SIDEBAR_KEYBOARD_SHORTCUT } from "./constants.js";

class SidebarState {

	__init() {this.open = $derived.by(() => this.props.open())}
	__init2() {this.openMobile = $state(false)}

	#isMobile;
	__init3() {this.state = $derived.by(() => (this.open ? "expanded" : "collapsed"))}

	constructor(props) {;SidebarState.prototype.__init.call(this);SidebarState.prototype.__init2.call(this);SidebarState.prototype.__init3.call(this);SidebarState.prototype.__init4.call(this);SidebarState.prototype.__init5.call(this);SidebarState.prototype.__init6.call(this);
		this.setOpen = props.setOpen;
		this.#isMobile = new IsMobile();
		this.props = props;
	}

	// Convenience getter for checking if the sidebar is mobile
	// without this, we would need to use `sidebar.isMobile.current` everywhere
	get isMobile() {
		return this.#isMobile.current;
	}

	// Event handler to apply to the `<svelte:window>`
	__init4() {this.handleShortcutKeydown = (e) => {
		if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			this.toggle();
		}
	}}

	__init5() {this.setOpenMobile = (value) => {
		this.openMobile = value;
	}}

	__init6() {this.toggle = () => {
		return this.#isMobile.current
			? (this.openMobile = !this.openMobile)
			: this.setOpen(!this.open);
	}}
}

const SYMBOL_KEY = "scn-sidebar";

/**
 * Instantiates a new `SidebarState` instance and sets it in the context.
 *
 * @param props The constructor props for the `SidebarState` class.
 * @returns  The `SidebarState` instance.
 */
export function setSidebar(props) {
	return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}

/**
 * Retrieves the `SidebarState` instance from the context. This is a class instance,
 * so you cannot destructure it.
 * @returns The `SidebarState` instance.
 */
export function useSidebar() {
	return getContext(Symbol.for(SYMBOL_KEY));
}