// Badge.tsx, sourced from https://github.com/react-bootstrap/react-bootstrap/blob/1498aba5c3ab6e52191178ff4dfa472e234a79de/src/Badge.tsx

import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as React from 'react';

import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import { Color, Variant } from 'react-bootstrap/types';

export interface BadgeCustomColoursProps
    extends BsPrefixProps,
    React.HTMLAttributes<HTMLElement> {
    bg?: Variant;
    pill?: boolean;
    text?: Color;
}

const propTypes = {
    /** @default 'badge' */
    bsPrefix: PropTypes.string,

    /**
     * The visual style of the badge
     *
     * 
     */
    bg: PropTypes.string,

    /**
     * Add the `pill` modifier to make badges more rounded with
     * some additional horizontal padding
     */
    pill: PropTypes.bool,

    /**
     * Sets badge text color
     *
     * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
     */
    text: PropTypes.string,

    /** @default span */
    as: PropTypes.elementType,
};

const BadgeCustomColours: BsPrefixRefForwardingComponent<'span', BadgeCustomColoursProps> =
    React.forwardRef<HTMLElement, BadgeCustomColoursProps>(
        (
            {
                bsPrefix,
                bg = 'blue',
                pill = false,
                text,
                className,
                as: Component = 'span',
                ...props
            },
            ref,
        ) => {
            const prefix = useBootstrapPrefix(bsPrefix, 'badge');
            return (
                <Component
                    ref={ref}
                    {...props}
                    className={classNames(
                        className,
                        prefix,
                        pill && `rounded-pill`,
                        text && `text-${text}`,
                    )}
                    style={{
                        backgroundColor: bg
                    }}
                />
            );
        },
    );

BadgeCustomColours.displayName = 'Badge';
BadgeCustomColours.propTypes = propTypes;

export default BadgeCustomColours;