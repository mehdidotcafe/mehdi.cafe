import React, {Component} from 'react'

import './Zoomable.css'

class Zoomable extends Component {
    constructor() {
        super()
        this.containerRef = React.createRef()

        this.transitionDuration = 300
    
        this.copiedElement = undefined
        this.currentClickListener = undefined
        this.scaleFactor = undefined
        this.reelElementWidth = undefined
        this.reelElementHeight = undefined
    
        this.state = {
            isZoom: false
        }
    }

    zoomOrNot(event) {
        const {isZoom} = this.state

        if (isZoom) {
            this.unzoom()
        } else {
            this.zoom(event)
        }
    }

    unzoom() {
        if (this.copiedElement) {
            this.copiedElement.style.transform = 'none'
            this.copiedElement.firstChild.style.transform = 'none'
            setTimeout(() => {
                this.copiedElement.remove()
            }, this.transitionDuration)
        }
        this.setState({
            isZoom: false
        })
    }

    zoom (event) {
        event.stopPropagation()
        const reelElement = this.containerRef.current
        const absolutePosition = reelElement.getBoundingClientRect();
        this.copiedElement = reelElement.cloneNode(true)
        const scaledHeight = reelElement.clientHeight
        const scaledWidth = reelElement.clientWidth
        this.reelElementHeight = reelElement.clientHeight
        this.reelElementWidth = reelElement.clientWidth
        let self = this

        const windowWidth = window.innerWidth || window.innerWidth || document.documentElement.clientWidth
        const windowHeight = window.innerHeight || window.innerHeight || document.documentElement.clientHeight

        this.scaleFactor = (windowWidth * 0.7) / reelElement.offsetWidth

        this.copiedElement.classList.add('zoomed')
        this.copiedElement.style.left = absolutePosition.left + 'px'
        this.copiedElement.style.top = absolutePosition.top + 'px'
        this.copiedElement.style.height = reelElement.clientHeight + 'px'
        this.copiedElement.style.width = reelElement.clientWidth + 'px'

        this.currentClickListener = window.addEventListener('click', function(e) {
            e.stopPropagation()
            e.preventDefault()
            window.removeEventListener('click', this)
            self.unzoom()
            return false
        })
    
        document.getElementsByTagName('body')[0].appendChild(this.copiedElement)
        this.setState({isZoom: true})
        setTimeout(() => {
            if (this.copiedElement.firstChild) {
                this.copiedElement.firstChild.style.transform = `scale(${this.scaleFactor})`
            }

            this.copiedElement.style.transform = `
                translate(
                    calc((${windowWidth / 2}px - ${absolutePosition.left}px - ${scaledWidth / 2}px)),
                    calc((${windowHeight / 2}px - ${absolutePosition.top}px - ${scaledHeight / 2}px))
                )
            `
        }, 0)
    }

    render() {
        return (
            <span>
                <div onClick={this.zoomOrNot.bind(this)} className={"zoomable-container"} ref={this.containerRef}>
                    <div className="zoomable-sub-container">
                        {this.props.children}
                        <span className="zoomable-close-button">
                            {this.props.closeButton}
                        </span>
                    </div>
                </div>
                { this.state.isZoom &&
                <span className="zoomable-background"/>
                }
            </span>
        )
    }
}

export default Zoomable