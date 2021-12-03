import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import ReactFullpage from '@fullpage/react-fullpage'

import Location from '../Location'

import { Scroller } from '../component/Scroller'

class MainScrollPage extends PureComponent {
  constructor() {
    super ()
    this.pageIds = Location.links.map((l) => l.link)
    this.onScroll = this.onScroll.bind(this)
    if (typeof window !== 'undefined') {
      this.container = window
    }
  }

  onScroll(prevSection, nextSection) {
    const { router } = this.props

    if (this.pageIds.indexOf(Location.pathname()) !== nextSection.index) {
      router.push(`/${this.pageIds[nextSection.index]}`, undefined, { shallow: true })
    }
  }

  render() {
    const {
      projects,
      filterableSkills,
      skills,
      experiences,
    } = this.props

    return (
      <ReactFullpage
        licenseKey='M7XuRiM%g5'
        scrollOverflow
        scrollbars={false}
        onLeave={this.onScroll}
        render={({ fullpageApi }) => (
          <Scroller
            defaultIndex={this.pageIds.indexOf(Location.pathname())}
            fullpageApi={fullpageApi}
            projects={projects}
            filterableSkills={filterableSkills}
            skills={skills}
            experiences={experiences}
          />
        )}
      />
    )
  }
}

export default withRouter(MainScrollPage)
