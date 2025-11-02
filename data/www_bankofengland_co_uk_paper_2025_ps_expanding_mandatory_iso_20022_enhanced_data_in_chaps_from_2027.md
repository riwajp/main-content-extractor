Expanding mandatory ISO 20022 enhanced data in CHAPS from 2027
==============================================================

Consultation response and policy statement

*   Related links
    -------------
    
    *   [Mandating ISO 20022 enhanced data in CHAPS](/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps)
    

Published on 22 September 2025

1: Overview
-----------

This sets out our position on expanding our mandatory ISO 20022 enhanced data requirements for CHAPS from November 2027, reflecting feedback to our 2024[consultation](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps).

We are committed to promoting and facilitating the benefits of ISO 20022 enhanced data for CHAPS payments_._The intended benefits for industry include global harmonisation, improved payment prioritisation, improved straight-through processing (both increasing resilience and lowering cost of payments), greater information and analysis capabilities, and improved fraud prevention. We have encouraged the use of enhanced data since CHAPS migrated to ISO 20022 in June 2023, and we have mandated Purpose Codes and Legal Entity Identifiers (LEIs) in certain CHAPS payments since May 2025 – refer to[Box A: Consolidated view of enhanced data mandatory requirements for CHAPS payments](#box_a).

Our 2024 consultation sought feedback on proposed expansions to our enhanced data requirements to take effect in 2027. We received over 20 responses to our 2024 consultation. Respondents included CHAPS Direct Participants (DPs), an indirect participant, a trade association, an end-user, a standards group and an LEI issuer. We thank all respondents for their thoughtful feedback.

### Policy position for November 2027

Having listened to consultation feedback, the Bank’s updated positions on the two proposed policy positions from Section 1.2 of our 2024 consultation are:

**Purpose Codes**From November 2027, we are expanding mandatory requirements for Purpose Codes to all CHAPS payments. These requirements will continue to be mandated through the CHAPS rulebook for payment initiation channels within DPs’ control.

In response to consultation feedback, we are enhancing the way we engage with the industry to develop guidance for consistent usage of purpose codes. This will include guidance on the selection of appropriate Purpose Codes and other enhanced data, as well as on implementation best practice on incorporating enhanced data within CHAPS payment journeys. While as the CHAPS payment system operator we can convene stakeholders, CHAPS DPs have closer expertise on end-user data and must contribute expertise and advise on benefit cases. More detail on consultation feedback and our responses are set out in Section 2.

**Payment initiation channels outside CHAPS DPs’ control**We will not be expanding mandatory enhanced data requirements to payment initiation channels outside CHAPS DPs’ control in 2027. Nevertheless, we expect that more volume will move into the control of CHAPS DPs as more payment systems migrate to ISO 20022.

Respondents identified that an obstacle to including enhanced data in payments initiated outside the control of CHAPS DPs has been the lack of readiness across the payment chain. CHAPS DPs have a leading role to drive change across the sector. We look forward to working with CHAPS DPs on initiatives to drive implementation, together with other authorities and representative groups. We expect CHAPS DPs to continue to promote the benefits of enhanced data in dialogue with customers and other partners, especially now that DPs have built capabilities for CHAPS.

In light of feedback, we decided not to expand requirements to channels outside CHAPS DP control at this stage. However, we need and expect industry to support the realisation of benefits of including Purpose Codes in all CHAPS payments. For example, we expect CHAPS DPs to play an active leadership role in developing best practice guidance for the consistent usage of purpose codes. More detail on consultation feedback and our responses are set out in Section 3.

In reaching these policy positions, we are aiming for the optimal trade-off between supporting all the benefits that enhanced data can bring and looking to minimise the implementation burden for the industry where it is disproportionate to do so. We have altered our proposal for payment initiation channels outside CHAPS DPs’ control for this reason, in line with feedback.

While we did not consult specifically on any changes to our LEI policy, we received specific feedback on our approach to the inclusion of LEIs within ISO 20022 payment messages. In response to this feedback, we have taken a couple of specific steps to enhance the experience of stakeholders in conjunction with other organisations – set out in the[Annex](#annex).

Box A: Consolidated view of enhanced data mandatory requirements for CHAPS payments
-----------------------------------------------------------------------------------

In response to consultation feedback, this box provides a consolidated timeline of when enhanced data requirements apply. For CHAPS DPs, requirements will be set out in the CHAPS rulebook including the[CHAPS Reference Manual](https://www.bankofengland.co.uk/-/media/boe/files/payments/chaps/chaps-reference-manual.pdf "Opens in new window"). The technical schemas for CHAPS messages are available on[MyStandards](https://www.swift.com/standards/mystandards-and-swift-translator "Opens in new window").

### June 2023 enabled enhanced data requirements

*   We enabled enhanced data fields for CHAPS payments, including purpose codes, LEIs, structured addresses and structured remittance.
*   From this point, we encouraged CHAPS DPs to populate enhanced data (before later mandating) to support the benefits of the ISO 20022 payment messaging standard.

### May 2025 mandated enhanced data requirements

*   Purpose Codes for all payments between financial institutions, and for property transactions – Section 4.1 of the 2024 Policy Statement.
*   LEIs for all payments between financial institutions – Section 4.2 of the 2024 Policy Statement.

### November 2027 enhanced data requirements

*   Purpose Codes for all CHAPS payments – Section 3 below.
*   LEIs for pacs.004 return payments between financial institutions – Section 4.2.6 of the 2024 Policy Statement.
*   LEIs for pacs.009 COV payments between financial institutions – Section 4.2.7 of the 2024 Policy Statement.
*   Structured remittance in pacs.008 payments – Section 4.3 of the 2024 Policy Statement.
*   Structured remittance in pacs.009 COV payments – Section 4.3.3 of the 2024 Policy Statement.

We continue to provide at least 18 months notice before expanding any ISO 20022 enhanced data requirements. In line with this, we expect to provide an update at least 18 months before November 2027 (ie May 2026) on the LEI and structured remittance expansions above.

2: Expanding the requirement for Purpose Codes to all CHAPS payments from November 2027
---------------------------------------------------------------------------------------

### Summary

From November 2027, we are expanding mandatory requirements for Purpose Codes to all CHAPS payments. These requirements will continue to be mandated through the CHAPS rulebook for payment initiation channels within CHAPS DPs control.

#### Support for expanding purpose code requirements to all CHAPS payments from November 2027

There was broad support on expanding purpose code requirements to all CHAPS payments from November 2027.

Several respondents felt that the application of Purpose Codes for financial institution and property transactions provided a good pathfinder for their overall adoption and agree to expanding the purpose of payment to all payments. Another respondent noted that we have worked collaboratively and successfully with Pay.UK to produce a shorter purpose code list to be used for UK purposes.

Three respondents reported that they have already enabled Purpose Codes for all their payments, including both cross-border and customer payments. Similarly, another respondent is working with clients and payment initiation applications/channels towards including Purpose Codes in all CHAPS payments by November 2027. This respondent expected to meet these requirements by November 2027. Another respondent advised that it is a relatively easy step to require a purpose code through their customer channels, as they have already introduced the data required for Financial Institution-to-Financial Institution transactions.

A separate respondent identified potential benefits of Purpose Codes being included within payment messages. This respondent would prefer that any changes relating to the inclusion of enhanced data accommodate the full range of fields despite only a small fraction being mandated in the early phases. This will prevent rework should other elements be mandated for CHAPS and lay the foundations should changes to the retail payments systems involve the mandating of enhanced data, which this respondent hopes they will. This respondent noted that much of the work on areas such as Purpose Codes and structured addresses has been done in collaboration with Pay.UK and looked forward to further discussions on this when plans are made for the future of the retail systems.

#### Industry actions and our responses

While respondents did not present specific internal technical barriers to delivering Purpose Codes in all CHAPS payments, some respondents did flag industry actions required to ensure the desired benefits are realised.

Some respondents flagged the need for clear guidance on how to correctly meet CHAPS requirements where there are also proprietary regulatory reporting codes in other jurisdictions. We support the Payment Market Practice Groups (PMPGs) ‘ISO 20022 Market Guidance – Regulatory Reporting, Purpose of Payment and Category Purpose’ from August 2024, available in the Payments Market Practice Group’s[PMPG document centre](https://www.swift.com/standards/market-practice/payments-market-practice-group-2024/document-centre?page=1 "Opens in new window").

Several respondents raised the large number of Purpose Codes as a risk to consistent usage. The Bank and Pay.UK provided a draft segmented list in Annex B of our[Purpose Code consultation response](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-purpose-codes-consultation-response.pdf "Opens in new window"), and welcome any feedback. The Bank as CHAPS payment system operator can convene relevant groups, as we have begun to do for the property purpose code segment, but we expect DPs to play an active leadership role in developing best practice guidance, given their closer expertise to end-user data.

Relatedly, respondents noted the need to ensure that customer interfaces are user-friendly, and that the Purpose Codes presented to customers are clear. We stand ready to support requests for new Purpose Codes from the CHAPS industry with a strong business justification to be added to the global[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window"). The Bank and Pay.UK can then reflect changes in the[UK recommended Purpose Code list](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-recommended-purpose-code-list.pdf "Opens in new window"). Several queries around the closest-match purpose code have recently been resolved with CHAPS DPs. We agree with previous industry feedback to our[Purpose Codes consultation response](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-purpose-codes-consultation-response.pdf "Opens in new window")that how payment service providers (PSPs) implement Purpose Codes in their customer channels is in the competitive space, but we are open to working with stakeholders (potentially along the lines of the solution being proposed) on a co-operative basis.

Respondents noted that there would be greater benefit if Purpose Codes are also mandated on Swift CBPR+. We agree with this, and we are also following[CPMI best-practice on international harmonisation](https://www.bis.org/cpmi/publ/d218.htm "Opens in new window"), such as through the use of the globally standardised[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window"). We also welcome Swift’s aim to[validate FINplus services and associated ISO messages against the External code sets](https://www2.swift.com/knowledgecentre/kb_articles/6000615?protected=true&reload-date=1753366668789 "Opens in new window"). To support the global journey, we encourage CHAPS DPs to reinforce our communications on the benefits of enhanced data and CHAPS requirements to the international community, especially now that they have built capabilities for CHAPS.

Similarly, respondents supported the Bank’s alignment with other domestic retail payment systems. We agree, and we expect industry to reinforce our communications and requirements, to realise the benefits of purpose codes. More broadly, we are working with our Standards Advisory Panel to consider payments standards issues at a strategic level, this includes UK retail payments developments with Pay.UK and a strategic discussion on payment fraud standards.

Respondents called for a unified approach towards payments without purpose codes. We support CHAPS DP feedback on customer communications, and an approach of monitoring and following up when Purpose Codes are not provided.

We support the response around the general importance of data protection.

An end-user respondent raised that some CHAPS DPs are communicating CHAPS requirements to customers with too little time before deadlines. The Bank publishes our policy with at least 18 months’ notice to allow CHAPS DPs to communicate requirements to customers with sufficient time. We continue to engage with end-users to understand their CHAPS experience, and to follow up with CHAPS DPs who are not providing requirements to customers in sufficient time.

A couple of CHAPS DPs flagged that they may not always know the underlying purpose of a customer transaction, especially when acting as an intermediary. Generally, we expect the originator of the payment to be closest to the payment’s purpose and therefore able to provide the highest quality data (in line with the ISO 20022 definition), but we have not set this as a requirement. It is precisely through the widespread usage of Purpose Codes that the industry can begin to develop the ability to identify and follow up on Purpose Codes which do not reflect the account’s activity. Finally, we will remind DPs of their regulatory requirements (including under anti-money laundering (AML), financial crime and tax regimes) to obtain information relating to their customers and their customers’ transactions.

Almost all respondents confirmed that our stated change management timeframe of 18 months should enable industry to prepare for the expanded purpose code requirements.

### 2.1: Proprietary regulatory reporting codes elsewhere

#### Industry feedback

Several respondents raised the need for consumer education regarding the differences between the purpose code and regulatory reporting code fields (proprietary code for the Country/Countries involved within the payment).

Payers could misunderstand the data required for each, and therefore clear guidance is needed to ensure the wider industry is aware of these differences. CHAPS DPs will need to ensure client education to state the purpose of payment is required (from the external code set) for any payments going through CHAPS.

CHAPS DPs must optimise their channels to encourage the correct use of the different fields.

Consumers may be unaware that a payment they are making will go through CHAPS, making it more likely they do not use the purpose of payment fields in the way they are intended as part of the enhanced data requirements.

Secondly, CHAPS DPs will need to change software to collect both the purpose code and the regulatory reporting code where the latter is required. Following this, these suppliers will then need time to make the changes to their systems and educate their customers on the correct use of each.

One respondent suggested work to understand how the[UK recommended Purpose Code list](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-recommended-purpose-code-list.pdf "Opens in new window")align with the use of other country-specific payment Purpose Codes on international payments, for example, on a GBP payment to the UAE.

#### Our response

To overcome these issues, we will support CHAPS DPs to deliver sufficient education to customers and software suppliers, on how to correctly use the purpose code and regulatory reporting code fields.

In August 2024, the Payments Market Practice Group published ISO 20022 Market Guidance – Regulatory Reporting, Purpose of Payment and Category Purpose, which can be accessed in the[PMPG document centre](https://www.swift.com/standards/market-practice/payments-market-practice-group-2024/document-centre?page=1 "Opens in new window"). As the CHAPS payment system operator, we support the best practice on how to populate the purpose code and the regulatory reporting code.

### 2.2: The number of Purpose Codes

#### Industry feedback

Several respondents flagged the large number of Purpose Codes in the[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window"). Given the range of options to choose from when making the payment and instances where some Purpose Codes overlap making more than one relevant to some payments, respondents thought that it may be likely there will be inconsistent use by PSPs and end-users who may be unsure about which purpose to select.

A respondent identified opportunities for simplification in some of the use cases. Another respondent noted that some PSPs with highly defined markets and customer use cases could step through a process to rationalise Purpose Codes and manage with a smaller number, but this may be more difficult for PSPs with a broad retail and corporate customer base.

A couple of respondents flagged that there is a risk of diminishing value if firms adopt different Purpose Codes for the same transaction. Inaccurate data will impact its usefulness and the ability to extract analytics and value.

Another respondent believed that all payments should have a purpose code, however only a subset will be required to be used by end-customers. Similarly, another respondent opined that in terms of personal CHAPS payments, overall, there are too many Purpose Codes to make their use workable or consumer friendly in everyday payments – given that there are over 300 Purpose Codes available to use in the international ISO 20022 set and over 100 in the UK list. Both respondents presented their experience that if customers are presented with long lists, or lists they do not understand, they will choose the quickest option, the wrong option or even drop out from the journey altogether. This could lead to outcomes that contradict the intentions of introducing Purpose Codes in the first place, such as negatively impacting on a firm’s ability to use purpose code data to tackle/prevent Authorised Push Payment scams or rely on the data for other purposes, and make the use of Purpose Codes less effective from incident management, financial crime compliance and operational resilience perspectives.

To overcome these barriers, a couple of respondents do not expect a reduction in the total number of Purpose Codes but suggested segmenting the Purpose Code list with market guidance for each segment. These segmented lists should reflect the nature of payments made by payers in the segment, and the sophistication of the payers. For example, one respondent shared that their retail customers can choose from nine payment purposes and are provided tailored fraud warnings based on the purpose chosen. Providing a segmented list in the guidance for different cohorts of end-users would not prevent end-users from choosing a purpose outside of the guidance list, but it would provide a manageable number of options. This could increase the likelihood of the correct purpose being chosen, helping to realise the benefits the field could bring as part of the requirements. The other respondent asked the Bank to support industry work to ensure consistency and communicate the benefits of Purpose Codes to customers, emphasising the value of choosing the right one.

#### Our response

The Bank and Pay.UK provided a draft segmented list in Annex B of our[Purpose Codes consultation response](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-purpose-codes-consultation-response.pdf "Opens in new window"), and welcome any feedback. Pay.UK’s approach to ISO 20022 enhanced data and Purpose Codes will include further alignment and where possible, simplification.

We, along with Pay.UK, agree with the importance of segmented market guidance. The Bank has already begun to convene experts for the property purpose code segment. For other segments, we stand ready to work with CHAPS DPs and other relevant experts to develop market guidance.

In addition to market guidance, we are open to exploring the potential for best practice implementation guidance with the industry where it is not in the competitive space. This could include, for example, agreeing an industry standard for segmenting recommended Purpose Codes to specific customer groups.

Although we have responded to consultation feedback by not expanding requirements to channels outside control, we are expecting industry support to realise the benefits of Purpose Codes in all CHAPS payments. For example, we expect DPs to play an active leadership role in developing best practice guidance.

In response to consultation feedback, we are enhancing the way we engage with the industry to develop guidance for consistent usage of purpose codes. While as CHAPS payment system operator we can convene relevant groups, CHAPS DPs have closer expertise on end-user data and must contribute expertise and advise on benefit cases.

### 2.3: Clarity of Purpose Codes for customers

#### Industry feedback

Respondents were keen to ensure that the collection of Purpose Codes is user friendly – especially given that a large proportion of customers do not make regular CHAPS payments and are learning and understanding the process as they go. There is also the risk of diminishing the value if firms adopt different Purpose Codes for the same use. While a respondent opined that the key use cases driving value are fraud mitigation, payments recovery and prioritisation, these benefits are not clear to end-users and subsequently data input quality at the customer end may vary. However, we have seen examples of where Purpose Codes have been used effectively to segment business, in conjunction with other enhanced data.

Consumers when asked to provide data (for mortgage transactions) may challenge the requirement to share information but this can be managed with clear rationale and Purpose Codes. However, even where they identify Purpose Codes during the payment journey, there is a question of how much consideration will be given to this step. Unconsidered or ‘bad data’ could also negatively impact a firm’s ability to use Purpose Code data to tackle/prevent fraud or rely on the data for other purposes. CHAPS DPs must also educate corporate customers about the implications of ISO 20022 for their CHAPS payments.

Another respondent opined that the existing list of 127 Purpose Codes is unrealistic to present to a customer when they make a payment. Nevertheless, they accepted that they will be responsible for providing customers with the necessary advice to provide accurate purpose codes. A key output of any standardisation work would be agreement to provide clear and consistent guidance to customers so that they can easily provide additional information consistently, even when making payments at different firms. Significant engagement with corporates to understand their current use of unstructured data may be required, as well as establishing clear UK guidance (with alignment to international best practice) on edge cases such as payments made via continuous linked settlement (CLS). This work should also drive out how the use of Purpose Codes can help to prevent fraud where payments, correctly categorised, are sent to accounts which are not appropriate to receive these transactions. In order to deliver the full benefit of purpose code implementation for the UK economy, a concerted effort to manage who Purpose Codes should be made available to and how this categorisation would be rolled out is required.

Two respondents noted that while the risk of payment rejection may change customer behaviours, they support simplified end-user Purpose Code options to deter overuse of ‘other’ code and support correct use. Clear definitions and usage guidelines are needed so these can be relied on for treatment/analytical strategies.

A separate respondent believed that, from a customer journey perspective, the number of codes which they could ask members to routinely enter will be very limited – perhaps seven or eight – especially in digital channels. However, if they were to use as an example, the transaction reasons requested of their customers today when establishing a new Faster Payment payee, the existing purpose code list is not a good match in places. For some payment headings there are too many codes eg investments, for others, codes which are applicable but not precise enough eg payments to friends and family and for some – no available Purpose Codes (eg crypto). Any proposal to ask consumers to enter Purpose Codes would need:

*   A mutually exclusive purpose code list and if more than one level were involved (ie ‘pick down’ lists), there would need to be a mutually exclusive data hierarchy where the highest level made it evident what was in each class – creating a ‘scent trail’ (eg an overall class of ‘general’ would not be helpful and the existing category codes are not consumer focused).
*   A limited number of choices to avoid confusion.
*   To operate alongside any existing questions in the payments process – eg the authorised push payment fraud warnings which focus on who is being paid and for what.
*   Consumer testing to ensure consumers understood the options.
*   Consumer educationso that consumers understand why the Purpose Codes are being requested and the importance of populating these accurately.

For this reason, the respondent would like to see a piece of collaborative work involving stakeholders as well as CHAPS DPs – which enables maximum value to be achieved from the use of Purpose Codes to be sent in payment journeys by consumers – of which they believe there could be no more than seven or eight – and those to be sent by businesses eg salaries, pensions etc to ensure accuracy and understanding of data received and that this can be relied on for data treatment purposes.

The respondent raised that there is an argument that the implementation of any Purpose Codes should start in a simplified form and potentially build over time as solutions are developed to enable different automated population methods where appropriate. A focus on scam prevention and priority payment types may enable a more operational and value-add first-phase implementation. The respondent suggested that PSPs could aim for automatic system driven-controls where possible over time, for example, to identify out-of-character payments to an account.

It is also important that the definition and guidance around a purpose code accurately reflects the transaction purpose if it is being relied on for a treatment strategy. And, that these are populated accurately and reliably – which can be dependent on who populates and their responsibility to do so accurately.

A final respondent expressed concerns around creating friction within customer interface channels for cross-border payments. The[UK recommended Purpose Code list](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-recommended-purpose-code-list.pdf "Opens in new window")is a condensed version of the[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window"), and if the UK purpose code does not match the exact reason required, then the customer may require providing more than one purpose code. This respondent flagged the potential to discourage customers when making payments.

#### Our response

The[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window")is a globally standardised list of Purpose Codes which is open to requests for new Purpose Codes not already covered by the list. We stand ready to support requests from the CHAPS industry with a strong business justification. The external code sets can be updated every quarter – though not every quarterly update adds new purpose codes.

The Bank and Pay.UK can then reflect changes in the[UK recommended Purpose Code list](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-recommended-purpose-code-list.pdf "Opens in new window").

On the number of codes and guidance, please refer to[our response to Section 3.2](#_Our_response)above on segmentation and the role of CHAPS DPs.

Several queries around the closest-match purpose code have recently been resolved with CHAPS DPs:

*   NETT for LIPS settlement.
*   LIMA for funding reserves and other RTGS accounts.
*   CASH for controlled start and managed start payments.
*   FXNT for CLS payments.

The Bank agrees with previous industry feedback to our[Purpose Codes consultation response](https://www.bankofengland.co.uk/-/media/boe/files/payments/rtgs-renewal-programme/iso-20022/uk-purpose-codes-consultation-response.pdf "Opens in new window")that how PSPs implement Purpose Codes in their customer channels is in the competitive space, but we are open to working with stakeholders (potentially along the lines of the solution being proposed) on a co-operative basis.

### 2.4: International alignment

#### Industry feedback

Respondents noted that indirect participant clients instructing via Swift CBPR+ would need to provide Purpose Codes for CHAPS by November 2027. However, to be compliant currently, as per the November 2026 spec published by Swift, these requirements are optional and there is no date for mandatory adoption. Respondents sought further information on the Swift CBPR+ Network validation of the Purpose Code. Ideally, respondents noted that aligning international/CBPR+ and CHAPS requirements would ease educating clients to apply the same rules for all payment types and make the Purpose Code field mandatory for all payments submitted via file, and ease streamlining expensive IT developments and testing.

One respondent flagged that the level of documentation required to meet all country-specific international payment requirements globally is substantial. Our requirements add additional overhead to international payments that are settled using CHAPS for a domestic leg and it may take time for the international community to become used to these requirements.

One respondent requested that 2028 would be a suitable date to extend the rejection period to and ideally aligning with Swift timelines to ensure all financial institutions and clients were educated on the provision of the correct Purpose Codes to support the intention of the change. Similarly, another respondent asked us to consider international adoption and compliance rates against the extent to which future payments must be rejected by CHAPS infrastructure for specific user journeys.

#### Our response

We agree that further support for enhanced data internationally would lead to benefits across the payments ecosystem. We believe that richer, structured data is a better outcome across the world, and we remain committed to influencing towards this. We are also following[CPMI best-practice on international harmonisation](https://www.bis.org/cpmi/publ/d218.htm "Opens in new window"), such as through the use of the globally standardised[External code sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets "Opens in new window").

We also welcome Swift’s aim to[validate FINplus services and associated ISO messages against the External code sets](https://www2.swift.com/knowledgecentre/kb_articles/6000615?protected=true&reload-date=1753366668789 "Opens in new window")as part of its Standards Release 2025 in a ‘non-blocking mode’. Swift aim to apply validation in a ‘blocking mode’ as part of Standards Release 2026. At that point messages that contain external codes that are not registered at ISO 20022 will be rejected (ie not acknowledged or NAK’d) with intervention required from users of the FINplus network.

While other payment systems continue along their journey to supporting enhanced data, we agree with broader industry feedback that we should continue to support the benefits of ISO 20022 within our control.

To support the global journey, we encourage CHAPS DPs to reinforce our communications on the benefits of enhanced data and CHAPS requirements to the international community, especially now that they have built capabilities for CHAPS.

With regards to payment rejection, we will not reject CHAPS payments solely due to incomplete or incorrect enhanced data before end-2028 at the earliest.

### 2.5: UK alignment

#### Industry feedback

One respondent thought that planning for the UK strategy of Purpose Codes and alignment to Pay.UK usage of these codes is essential to ensure appropriate and consistent use from all customer segments.

Another respondent’s primary barrier to meeting these requirements was the ability for industry to co-ordinate on appropriate standardisation activities with industry. This respondent looked forward to working with us including alongside Pay.UK’s standards work or UK Finance’s Standards Engagement Forum.

Similarly, another respondent advised considering any related developments such as Open Banking or work to prevent authorised push payment fraud. As the industry is spending money implementing the purpose code changes, then we have a collective vested interest in ensuring the use of Purpose Codes delivers desired outcomes and that the maximum benefit can be derived. This information would also help firms to determine how long it would take to effectively implement.

A final respondent concluded that the industry should continue to collaborate and share information within the community, with Swift and the Bank to ensure the control build out captures all the preventative, identifier, and reactive controls for the enhanced data requirements. The respondent asked for more industry wide communications especially for critical third parties to ensure effective and cost-efficient planning and delivery of these requirements.

#### Our response

We agree with the importance of both communications and industry co-ordination. We are enhancing the way we engage with the industry to work together to resolve the obstacles. To support this, we expect industry to reinforce our communications and requirements, to realise the benefits of purpose codes.

More broadly, we are working with the Standards Advisory Panel to consider payments standards issues at a strategic level, this includes UK retail payments developments with Pay.UK and a strategic discussion on payment fraud standards.

### 2.6: Purpose Code not provided

#### Industry feedback

A respondent noted that CHAPS DPs are building the internal controls to be compliant with the enhanced data requirements, and these controls will be without technical rejection from Swift and CHAPS. To ensure full compliance with the November 2027 requirements, CHAPS DPs will need full understanding of technical rejection to develop and improve the controls to effectively manage the risk of non-compliance. The respondent asked for formalised testing for all CHAPS DPs to ensure their full suite of controls, inclusive of the technical rejection control at Swift and RTGS to ensure the industry is prepared as possible for the November 2027 go-live.

One respondent opined that not rejecting payments where Purpose Codes are not provided presents a concern that payment initiators may not populate the purpose code correctly, or at all. This may be exacerbated by the fact that the use of default codes (such as OTHR) is discouraged. The respondent explained that reasonable and proportionate controls to ensure the data is provided will require implementation of an internal strategy to ensure systematic controls are in place, in conjunction with extensive outreach to clients to educate regarding the required new processes. This will include, where appropriate, agreeing with specific channels which code(s) would be most applicable and appropriate for their payment flows.

Similarly, another respondent opined that where payments originate outside of their group, the respondent cannot enforce the provision of the appropriate purpose code, unless there is a decision that all CHAPS DPs should reject inbound payments that are not accompanied by the appropriate purpose code. Another respondent suggested that a ‘Not provided’ code could be created for when a purpose code is not received from an Indirect participant.

Another respondent reported that for payments submitted via file, if their client has not populated the Purpose Code, then the respondent is not going to populate it themselves and is not going to stop/reject those payments either, since at this stage CHAPS is not going to reject payments without Purpose Codes either. Nevertheless, this respondent is planning on educating clients to use Purpose Codes for all payments submitted via file.

A separate respondent explained that although CHAPS is not technically rejecting via the schema yet, their vendor must build these mandatory requirements into validation processes for CHAPS payments. This means that if the respondent receives a CBPR+ instruction to make a CHAPS payment and that instruction does not contain the required enhanced data, the payment will fall to a repair queue and will not straight-through-process. Therefore, if enhanced data requirements are not mandated on CBPR+ there is a risk that there is a decline in CHAPS STP rates. This will have resourcing implications. This respondent will need to consider their policy for how payment instructions that do not contain the required enhanced data are managed. They could reject them or take a softer approach by processing the payments with customer education and monitoring. They will need to implement monitoring processes to understand customer behaviour and meet the periodic assurance process.

A final respondent concluded that the industry needs to align on the treatment of messages which do not have Purpose Codes where they should be present.

#### Our response

We have previously published that we will not reject CHAPS payments solely due to incomplete or incorrect enhanced data before end-2028 at the earliest.

We support DP feedback on customer communications, and an approach of monitoring and following up when Purpose Codes are not provided.

### 2.7: The risks of greater data

#### Industry feedback

One respondent made the general point that the more data is to be entered, the greater chance of error and incorrect understanding which could result from such an error. The accuracy of this data is important if it to be relied upon for treatment purposes (eg for financial crime). Data protection and permissions implications would need to be explored and any processing would need to be in compliance with applicable data protection requirements.

#### Our response

We recognise this is an important point to consider with all payments data, irrespective of value, and we continue to support best practice around data protection.

### 2.8: Lateness of communications to end-users

#### Industry feedback

An end-user responded that manually keyed payments are likely to be less of an issue and have shorter lead in times to meeting the November 2027 deadline, but for bulk submissions, reporting etc, end-users need their PSPs to be sharing technical guides as soon as possible. Without good quality timely information, it will be impossible for end-users to fully impact the downstream system changes required and make suitable plans for implementation within the time frames – to take advantage of the benefits that enhanced data can bring. Experience of other industry changes is that corporate and government customers do not always have sufficient time to implement the changes required.

#### Our response

We publish our mandatory enhanced data requirements with at least 18 months’ notice in order to allow CHAPS DPs to communicate our requirements to customers with sufficient time.

We continue to engage with certain end-users to understand their CHAPS experience and follow up with CHAPS DPs who are not providing requirements to customers in sufficient time.

### 2.9: Not knowing the true purpose

#### Industry feedback

One respondent flagged that they have significant volumes of pacs.008 where they act as the intermediary bank, but the majority still have financial institution (FI) to FI flow. The respondent opined that providing assurance through CHAPS Reference Manual attestation on the integrity of instigators overseas or their own corporates would be nearly impossible. The respondent felt that they have limited visibility of what the true purpose of payment was.

Similarly, another respondent felt that where the appropriate Purpose Code is chosen by customers initiating payments, the PSP does not have viable means to validate that their customers making payments from proprietary channels are choosing the correct Purpose Code in every use case.

#### Our response

Generally, we expect the originator of the payment to be closest to the payment’s purpose and therefore able to provide the highest quality data (in line with the ISO 20022 definition), but we have not set this as a requirement.

It is precisely through the widespread usage of Purpose Codes that the CHAPS industry can begin to develop the ability to identify and follow up on Purpose Codes which do not reflect the account’s activity.

Finally, we remind DPs of their regulatory requirements (including under AML, financial crime and tax regimes) to obtain information relating to their customers and their customers’ transactions.

### 2.10: Timeline required for changes

We continue to provide at least 18 months’ notice ahead of expanding any CHAPS enhanced data requirements. Almost all respondents confirmed that this change management time frame of 18 months should enable industry to prepare for the expanded purpose code requirements.

3: Enhanced data requirements for payment initiation channels outside CHAPS DPs’ control
----------------------------------------------------------------------------------------

### Summary

We will not be expanding mandatory enhanced data requirements to payment initiation channels outside CHAPS DPs’ control in 2027. Nevertheless, we expect that more volume will move into the control of CHAPS DPs as more payment systems migrate to ISO 20022.

#### Background to our proposal

In Section 6.1 of the 2024 Policy Statement, we proposed expanding our enhanced data requirements to CHAPS payments from all initiation channels from November 2027. We proposed this ambitious timeline in response to historic industry feedback about the importance of mandating to increase the usage of enhanced data. By November 2027, it is expected that other major jurisdictions will have migrated to ISO 20022. End-2027 is also the deadline for market infrastructures to meet the Committee on Payments and Market Infrastructures (CPMI) harmonisation requirements for cross-border payments. We also expect that CHAPS DPs will have had time to increase both their usage of enhanced data and their communications to clients on the requirements for CHAPS payments.

#### Summary of obstacles and our response

In support of expanding mandatory requirements to all channels, some respondents felt that ensuring uptake across all initiation channels is vital to ensuring the benefits of the requirements are felt across all participants.

On the other hand, several respondents explained the significant obstacles DPs face in ensuring that enhanced data is included in payments initiated through channels that DPs do not control (as defined in the CHAPS Operational Reference Manual).

CHAPS DPs argued that they cannot directly control the readiness of customers, indirect participants, and vendors – especially during busy periods of industry change. Partly in response to this feedback, we will not be expanding mandatory requirements to initiation channels outside CHAPS DPs’ control, but we remind CHAPS DPs of their responsibilities to communicate CHAPS requirements to all those to whom DPs provide CHAPS access to, as set out in paragraphs 37.1 to 37.17 of the[CHAPS Reference Manual](https://www.bankofengland.co.uk/-/media/boe/files/payments/chaps/chaps-reference-manual.pdf "Opens in new window").

Respondents asked us to consider both domestic and international harmonisation. We expect increasing volumes of CHAPS payments moving into CHAPS DPs’ control as more payment systems migrate to ISO 20022. We will continue to work with others to promote awareness of enhanced data requirements through a range of approaches including speeches, CHAPS DPs’ client briefings, and development of white-label materials where appropriate. We expect CHAPS DPs to communicate the benefits of enhanced data to other payment system operators and users, especially now that they have built capabilities for CHAPS.

Some respondents suggested that the industry and the Bank build the value benefits case, which we support. While some of these benefits may be quantifiable today, we also believe that richer, structured data sets the foundation for enabling future innovation and benefits (which may not all be quantifiable ex ante).

We support respondents’ suggestion that payments which do not include mandated enhanced data continue to settle, but DPs report and escalate with payment initiators.

We also support respondents’ more general highlighting of the need for data cleansing, downstream integration, and ongoing assessment of internal changes to realise the benefits of ISO 20022 enhanced data.

### 3.1: Readiness of customers, indirect participants, and vendors

#### Industry feedback

Several respondents argued that CHAPS DPs cannot directly control the readiness of their customers, indirect participants and vendors. One respondent argued that it is difficult for CHAPS DPs to require their clients to include all the necessary information, and the challenge is increased for payments initiated by channels not controlled by CHAPS DPs. Another respondent argued that, by definition, CHAPS DPs are not in control of these channels, so, in some cases it will be difficult/impossible to implement controls at source level that ensure the data is provided – for example the origin of a payment instruction could be a bespoke form created by the customer of a customer of which the CHAPS DP has no visibility. This complicates CHAPS DPs’ ability to enforce enhanced data requirements. The most extreme approach would be to reject payments that do not meet the requirements however this would not be this respondent’s preference, because this would slow payment processing and does not seem proportionate.

Multiple respondents highlighted that CHAPS DPs with corporate customers may have a dependency on clients to update their systems and processes, or would have to introduce additional steps and friction into the payment initiation process. These respondents added that the change will have implications across their internal functions and may impact terms and conditions and other agreements in place between CHAPS DPs and their corporate customers. Corporate customers may resist constant changes and varying data requirements adding complexity to the implementation.

Another respondent fed back that ‘reasonable and proportionate controls’ to ensure the data is provided will require implementation of an internal strategy to ensure systematic controls are in place, in conjunction with extensive outreach to clients to educate regarding the new required processes.

To overcome this, respondents asked us to play a much-expanded role in collaborating with the largest indirect participants, software providers and corporates to ensure they understand the requirements. Respondents advised that it would also be helpful for us to understand when these firms will be able to implement the requirements, as their readiness timelines are likely to inform timelines for the wider industry.

#### Our response

We recognise the significance of and broad industry agreement around the nature and scale of the obstacles raised. In response to consultation feedback, we will not at this stage be expanding mandatory requirements to initiation channels outside CHAPS DPs’ control.

While we accept the consultation feedback that DPs cannot be held directly responsible for the readiness of customers, indirect participants and vendors, we want to stress to CHAPS DPs the importance of their responsibilities to communicate CHAPS requirements to all those to whom CHAPS DPs provide CHAPS access to. As the payment system operator for CHAPS, we can set requirements directly upon CHAPS DPs and rely upon CHAPS DPs to spread these positive changes further across the payments ecosystem.

Pay.UK will apply the same approach for Faster Payments direct participants. Pay.UK will continue to collaborate with us and supports DPs to encourage adoption and best usage practices to benefit the wider payments ecosystem.

We strongly encourage DPs to design systematic controls to ensure that enhanced data is included and customer education to ensure successful implementation.

### 3.2: International harmonisation

#### Industry feedback

One respondent expressed that they would like to see us aligning our timeline and enhanced data requirements with CBPR+/other international payments standards. They were concerned that otherwise, the burden is on DPs to initiate separate IT development and testing and that adds effort and cost. In addition to the extra costs, if the timelines are not aligned, DPs would have to internally manage prioritisation of technical resources given challenging priorities within the global perimeter across Asia, Europe and the US.

#### Our response

Part of our decision to not expand the mandatory enhanced data requirements to initiation channels outside DPs’ control is to avoid diverging too far from international harmonisation.

We expect increasing volumes of CHAPS payments moving into DPs’ control as more payment systems migrate to ISO 20022. We will continue to work with others to promote awareness of enhanced data requirements through a range of approaches including speeches, CHAPS DPs’ client briefings, and development of white-label materials where appropriate. We are committed to our role in facilitating the benefits of ISO 20022 enhanced data. While some of these benefits may be quantifiable today, we believe that richer, structured data sets the foundation for enabling future innovation and benefits (which may not all be quantifiable ex ante). In line with consistently strong feedback from the industry on implementing ISO 20022 messaging, we believe that richer, structured data is a better outcome across the world, and we remain committed to influencing towards this end. We also expect CHAPS DPs to communicate the benefits of enhanced data to other payment system operators and users, especially now that they have built capabilities for CHAPS.

Pay.UK is also committed to the same cross-border and international data harmonisations through its use of enhanced ISO 20022 data. It will continue to reinforce the outcomes and benefits for UK participants who send/receive internalised retail payments.

### 3.3: Domestic harmonisation

#### Industry feedback

One respondent argued that consumers are often not fully aware of the underlying rail of their payment instruction. There is a risk of confusion if a customer pays £25,000 via Faster Payments with one PSP (and no Purpose Code is needed) but £25,000 via another PSP is routed via CHAPS and a Purpose Code is required. The respondent called for standardised wording for consistent communications to minimise customer confusion, and for harmonising the requirements across all payment types (including Faster Payments) to simplify the education of customers.

Another respondent asked us to consider how we can support a payments roadmap which enables co-ordinated change and optimal outcomes from investments. Respondents asked for the Bank, Open Banking and Pay.UK to align on future enhanced data requirements to ensure maximum value for investment in ISO 20022, Transaction Risk Indicators etc; and outcomes for end-users. V4 of the Open Banking standards incorporates an uplift to ISO 20022. The respondent said that they would need to understand if and how any requirements on Faster Payments and CHAPS enhanced data would impact Open Banking journeys.

#### Our response

Part of our decision to not expand our mandatory enhanced data requirements to initiation channels outside DPs’ control is informed by this consultation feedback on not departing too far from other domestic standards.

We regularly engage with Open Banking and Pay.UK on their roadmaps. Nevertheless, we are keen to maintain the momentum around realising the benefits of ISO 20022 enhanced data and are working closely with Pay.UK and Open Banking to ensure an aligned approach on message standards. In July 2025, Pay.UK outlined their approach to richer ISO 20022 enhanced data which aligns as far as possible with CHAPS enhanced data. A continuous and collaborative approach to setting standards for payments will continue between all relevant UK standards setting bodies to maximise the benefits of alignment and harmonisation.

### 3.4: Benefits cases

#### Industry feedback

To fully realise the benefits of mandating ISO enhanced data in CHAPS, one respondent asked us to continue to engage with CHAPS participants on how to unlock customer benefit.

Similarly, another respondent asked that time is invested, by the Bank and industry, in building the benefits case with the next level of detail setting out, for example, how the use of data insights and analytics will generate value; and the requirement for additional functionality to realise the full benefits. The respondent provided the example of a leading benefits case being data driven fraud mitigation that can improve customer outcomes and industry costs. While data driven enhanced fraud capability is welcomed, it requires an entire set of processes to support this which must all be available at the same time. It is therefore important to define who will drive consideration of the use case for fraud mitigation and the process for data validation to avoid false positives.

#### Our response

Where we can play a helpful role, we will continue to facilitate industry experts to convene and develop these benefits cases.

We support the feedback on developing benefits cases. Our policy has always aimed to support the realisation of the benefits of enhanced data across the ecosystem where they outweigh the implementation burden. We will continue to engage with CHAPS DPs as well as industry associations to gather feedback on the most effective delivery vehicle for these benefits cases.

We welcome the suggestions of fraud mitigation and analytics as initial benefits cases and agree with the powerful role use cases can play in illustrating the value inherent in consistent, quality data. More generally, we believe that the consistent and broad usage of enhanced data lays the necessary foundation for the payments ecosystem to develop future benefits which may not yet be apparent.

### 3.5: Congestion of change initiatives

#### Industry feedback

Respondents agreed that organisations will need to co-ordinate and manage their change capacity and resources for industry and regulatory payment developments. Various respondents noted the examples of the National Payments Vision, Open Banking, combatting fraud, central bank digital currency, Account-to-Account payments, and the way forward for retail payments.

Two respondents asked us to consider the implementation implications for building societies and other indirect participants, for whom the compliance onus is on their sponsor bank/direct participant. For example, building societies with CHAPS mortgage volumes will be required to provide data, and will have a relatively large lift with potentially limited change capability across their legacy payment gateway and payment processing estate and core banking estate. One of these respondents concluded that there must be clear mechanisms for indirect participants to be supported by their sponsor banks and/or access the appropriate data effectively.

A separate respondent added that enterprise resource planning software providers will also be stretched and may not have the capacity to meet change requirements across multiple firms. This respondent explained that each firm will have software that has been slightly customised and will require a dedicated and individualised approach, complex integration with legacy gateways and processing systems.

Respondents asked for continued engagement from us to support a co-ordinated and well-managed approach, and for continued early communication from us to avoid delays around the communication from DPs to indirect participants.

#### Our response

Part of our decision to not expand mandatory enhanced data requirements to initiation channels outside DPs’ control is informed by this consultation feedback on industry and regulatory congestion in the payments landscape. We will continue to engage with industry and to provide early communication. Nevertheless, we remind DPs of their responsibilities to ensure that indirect participants are aware of and ready to meet CHAPS requirements, as set out in paragraphs 37.1 to 37.17 of the[CHAPS Reference Manual](https://www.bankofengland.co.uk/-/media/boe/files/payments/chaps/chaps-reference-manual.pdf "Opens in new window").

### 3.6: Payments without enhanced data

#### Industry feedback

A few respondents raised the issue of how to approach payments without enhanced data. One respondent flagged that rejecting a customer’s payment due to a non-compliant format may be seen by the market as a competitive differentiator between different FIs) particularly for cross-border payments. This respondent concluded that it is therefore important that we clearly communicate and fairly arbitrate the implementation of any rules-based rejection criteria. Another respondent added that to allow payments to continue to flow, procedures could be introduced to report and escalate participants/entities/customers that are not meeting the requirements.

#### Our response

We support the approach of DPs reporting and escalating without rejecting payments at this stage, due to the financial stability implications.

### 3.7: Data cleansing and integration

#### Industry feedback

One respondent noted that different payment providers have varying levels of structured data and different experiences with the requirement to test for data quality and integrity. Therefore, relevant stakeholders and data sources may need to undertake data cleansing exercises. Payment providers should cross-reference for consistency across data sources, potentially across multiple complex legacy systems and multiple functions. The respondent argued that while payments teams could operationalise the ISO 20022 implementation, other functions within firms may not be similarly agile, leading to downstream impacts.

#### Our response

We support the importance of data cleansing and are mindful of the varying degrees of integration at various CHAPS DPs. We encourage CHAPS DPs to ensure that ISO 20022 requirements are taken into account when upstream systems are being upgraded. We believe consistent quality enhanced data is crucial to building user confidence.

### 3.8: Ongoing assessment

#### Industry feedback

One respondent made the general point that it will be necessary to continue to assess any channel, systems, process, and ledger changes to capture, process, and store ISO data to estimate internal effort required to comply by 2027 and beyond.

#### Our response

We agree with the necessity of DPs making continuous assessments of their channels, systems, process, and ledger changes to capture, process and store ISO data to meet the CHAPS requirements – and to support the realisation of the benefits of ISO 20022 enhanced data.

### 3.9: Staggered rollout

#### Industry feedback

One respondent asked whether all CHAPS DPs will come into scope at the same time or whether we intend a staggered approach, similar to other regulatory change initiatives such as Confirmation of Payee. The respondent flagged that we may need to consider any market impacts on corporates and other end-customers preferring not to move to enhanced data requirements in a staged roll-out.

#### Our response

As with previous mandating, all CHAPS DPs come into scope of our enhanced data requirements at the same time. If this were to change to a staggered approach in the future, we would consider any market impacts on corporates and other end-customers. Nevertheless, we appreciate that the CHAPS DP population is diverse, and CHAPS DPs face different challenges in their ability to implement enhanced data. We will engage with CHAPS DPs who, due to specific constraints, may be unable to meet the requirements at the point they come into force. This engagement will include a clear understanding of their remediation plans and associated timeframes.

### 3.10: Consolidated view

#### Industry feedback

Two respondents asked for a consolidated view of all the ISO 20022 fields to be updated to improve implementation, as each mandatory direction requires firms to modify their systems multiple times.

#### Our response

We have shared a consolidated view of enhanced data mandating, please refer to[Box A: Consolidated view of enhanced data mandatory requirements for CHAPS payments](#box_a).

Annex
-----

*   While we did not consult specifically on any changes to our LEI policy, we received specific feedback on our approach to the inclusion of LEIs within ISO 20022 payment messages. In response to this feedback, we have taken a couple of specific steps to enhance the experience of stakeholders in conjunction with other organisations.
    
    In support of our approach to LEIs in payments, a respondent noted that our mandating of LEIs supported the[European Union's (EU’s) Transfer of Funds Regulation (TFR)](https://www.consilium.europa.eu/en/press/press-releases/2023/05/16/digital-finance-council-adopts-new-rules-on-markets-in-crypto-assets-mica/ "Opens in new window").
    
    A second respondent reiterated that the widest possible use of the LEI can significantly reduce administrative hurdles for CHAPS DPs while guaranteeing a secure means to monitor potential money-laundering and terrorist financing risks.
    
    A third respondent was very supportive of the stance we have taken on LEIs covering enhanced data for the CHAPS system. The respondent envisaged that LEI increasingly be used for ecommerce, including as a key component in digital certificates. As a result, this respondent expressed confidence that we will be able to move sooner rather than later to mandate the inclusion of LEI data for all CHAPS payments.
    
    A fourth respondent expressed support for our mandatory requirements for LEIs. The global and interoperable nature of the LEI allows CHAPS DPs to enhance their customer due diligence and sanctions screening measures. The LEI provides an efficient means to identify ‘who owns whom’ in the financial system, allowing CHAPS DPs to proceed with more efficient resolution planning. Our initiative is in line with the recommendations and guidance issued by other standard setting bodies and international organisations on the use of the LEI in the payments’ ecosystem:
    
    *   The[Financial Stability Board G20 Roadmap for Enhancing Cross-border Payments: Priority actions for achieving the G20 targets](https://www.fsb.org/2023/02/g20-roadmap-for-enhancing-cross-border-payments-priority-actions-for-achieving-the-g20-targets/ "Opens in new window")emphasised the significant role of the LEI in assisting entities and financial institutions with sanctions compliance, customer due diligence and wire transferring.
    *   Swift’s[Guiding principles for screening ISO 20022 payments](https://www.swift.com/news-events/news/swift-guiding-principles-screening-iso-20022-endorsed-wolfsberg-group "Opens in new window")endorsed by the PMPG and Wolfsberg Group, highlighted how the LEI can support an effective, targeted approach to sanctions screening and AML/CFT processes.
    *   [Financial Action Task Force (FATF) Recommendations](https://www.fatf-gafi.org/content/fatf-gafi/en/publications/Fatfrecommendations/Fatf-recommendations.html "Opens in new window")– the FATF Recommendation 16 of the ‘Travel Rule’ has been updated to state that for both originators and beneficiaries ‘information accompanying all qualifying payments or value transfers should always contain \[…\] their Business Information Code (BIC), LEI, or the unique official identifier of the originator/beneficiary.’.
    *   The[Reserve Bank of India has mandated the LEI in all payment transactions totalling ₹50 crore and more](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12010&Mode=0 "Opens in new window").
    *   The EU’s[AML Regulation](https://www.europarl.europa.eu/doceo/document/A-9-2023-0151-AM-329-329_EN.pdf "Opens in new window"), part of the AML package, references the LEI as a useful tool in performing identity checks on customers and beneficial owners for legal persons. Additionally, as part of the EU AML package, the[EU TFR](https://www.consilium.europa.eu/en/press/press-releases/2023/05/16/digital-finance-council-adopts-new-rules-on-markets-in-crypto-assets-mica/ "Opens in new window")was recast to ensure that transfers are accompanied by various data points (which may include LEIs where available) on the originator and beneficiary (for non-individuals). Lastly, the regulation on[instant credit transfers in euros](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202400886 "Opens in new window")enables PSPs to allow users to use the LEI for the verification of payee.
    
    This respondent also highlighted the role of the[Validation Agent](https://www.gleif.org/en/lei-solutions/validation-agents "Opens in new window")model in supporting DPs to enrich their internal databases with LEIs, enabling them to meet the CHAPS requirements in a timely manner. Several CHAPS DPs’ parent organisations are already benefiting from becoming Validation Agents. This respondent also encouraged that the LEI should be**regularly updated**in accordance with the[Global LEI system policy](https://www.gleif.org/en/lei-data/access-and-use-lei-data/policy-conformity-flag "Opens in new window"), to ensure that DPs can leverage all the benefits associated with the use of the LEI for know-your-customer procedures. This will ensure that the verification procedure remains credible and accurate.
    
    Several respondents asked us to work with Pay.UK to add LEIs to Bank Reference Data – the basis for the Extended Industry Sort Code Database (EISCD). This would make the implementation of LEI much easier for some CHAPS DPs as the EISCD is already integrated into their payments platform.
    
    In response, we worked with Pay.UK to successfully deliver this change in July 2025. The data upload phase also prompted CHAPS DPs to increase the data quality of their BICs and sort codes, and processes for updating data in a timely manner. Pay.UK is also exploring whether this is repeatable, or whether other enhancements are required to the sort-code information held for UK retail payments.
    
    One respondent also mentioned our work to add LEIs to the Prudential Regulation Authority’s (PRA’s) list of regulated financial institutions. From June 2025, the PRA has been[publishing LEIs for regulated investment firms, building societies, and banks](https://www.bankofengland.co.uk/prudential-regulation/authorisations/which-firms-does-the-pra-regulate)incorporated in the UK. The list will be enriched in the coming months with LEIs for regulated legal entities incorporated overseas operating through a UK branch.
    

[Back to top](#)