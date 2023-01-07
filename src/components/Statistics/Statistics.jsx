import PropTypes from 'prop-types'
import {Section, Title, StatList, StatItem, Label, Percentage} from './Statistic.styled'

export const Statistics = ({ title, stats }) => {
    return (<Section>
        <Title>{title}</Title>
        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
    </StatItem>))}
  </StatList>
</Section>)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}