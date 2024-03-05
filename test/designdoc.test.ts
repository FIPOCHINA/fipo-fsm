import {describe, expect, it} from '@jest/globals'
import {DesignDocState, StateStore,} from '../src'
import {DesignDocStateMachineFactory} from "../src/factories";

class MockDesignDoc {
    @StateStore('DesignDoc')
    state: DesignDocState = DesignDocState.Draft
}


describe('design doc', () => {
    const doc = new MockDesignDoc()
    doc.state = DesignDocState.InReview

    it('backend', () => {
        const t = DesignDocStateMachineFactory<MockDesignDoc>(doc)

        expect(t.state()).toBe(DesignDocState.InReview)
        expect(t.can()).toStrictEqual([
            'ReviewApprove',
            'ReviewReject',
            'ReviewApproveWithChanges',
            'Cancel'
        ])
    })
    it('frontend', () => {
        const t = DesignDocStateMachineFactory(null)

        expect(t.state()).toBeNull()
        expect(t.can(DesignDocState.InReview)).toStrictEqual([
            'ReviewApprove',
            'ReviewReject',
            'ReviewApproveWithChanges',
            'Cancel'
        ])
    })
})
