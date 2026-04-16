// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => {
	const React = require('react');

	const MotionMock = React.forwardRef(({ children, ...props }, ref) => {
		const {
			initial,
			animate,
			exit,
			whileInView,
			whileHover,
			whileTap,
			viewport,
			transition,
			variants,
			...rest
		} = props;

		return React.createElement('div', { ...rest, ref }, children);
	});

	const motion = new Proxy(
		{},
		{
			get: () => MotionMock
		}
	);

	return { motion };
});
